#!/usr/bin/env python3
"""
Weekly GSC Report for Appnary

Generates a weekly Google Search Console report showing:
- Total clicks, impressions, CTR, average position
- Top 10 queries by impressions
- Top 10 pages by impressions
- Pages with declining position

Usage:
    python3 gsc-weekly-report.py

Output:
    Formatted text suitable for Telegram delivery.
"""

import json
import os
import sys
from datetime import datetime, timedelta

import google.auth
import google.auth.transport.requests
from google.oauth2 import service_account

SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
SERVICE_ACCOUNT_FILE = os.path.join(os.path.dirname(__file__), '..', '.secrets', 'gsc-service-account.json')
PROPERTY = 'sc-domain:appnary.com'
BASE_URL = 'https://searchconsole.googleapis.com/webmasters/v3'


def get_credentials():
    """Load service account credentials."""
    return service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)


def query_gsc(authed_session, start_date, end_date, dimensions=None, row_limit=10, order_by='impressions'):
    """Query GSC search analytics."""
    data = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": dimensions or [],
        "rowLimit": row_limit,
    }
    
    if order_by == 'clicks':
        data["orderBy"] = "clicks"
    elif order_by == 'impressions':
        data["orderBy"] = "impressions"
    elif order_by == 'position':
        data["orderBy"] = "position"
    
    resp = authed_session.post(
        f"{BASE_URL}/sites/{PROPERTY}/searchAnalytics/query",
        json=data
    )
    return resp.json()


def format_date(date_str):
    """Format date string for display."""
    d = datetime.strptime(date_str, "%Y-%m-%d")
    return d.strftime("%B %d, %Y")


def generate_report():
    """Generate the weekly GSC report."""
    credentials = get_credentials()
    authed_session = google.auth.transport.requests.AuthorizedSession(credentials)
    
    # Calculate date range (last 7 days)
    end_date = (datetime.now() - timedelta(days=3)).strftime("%Y-%m-%d")  # 3 days behind for data freshness
    start_date = (datetime.now() - timedelta(days=10)).strftime("%Y-%m-%d")
    
    # Previous week for comparison
    prev_end_date = (datetime.now() - timedelta(days=10)).strftime("%Y-%m-%d")
    prev_start_date = (datetime.now() - timedelta(days=17)).strftime("%Y-%m-%d")
    
    lines = []
    lines.append("📊 **Weekly GSC Report for Appnary**")
    lines.append(f"📅 Period: {format_date(start_date)} to {format_date(end_date)}")
    lines.append("")
    
    # Overall metrics
    data = query_gsc(authed_session, start_date, end_date)
    if 'rows' in data and data['rows']:
        r = data['rows'][0]
        lines.append("📈 **Overall Performance**")
        lines.append(f"• Clicks: {r['clicks']}")
        lines.append(f"• Impressions: {r['impressions']}")
        lines.append(f"• CTR: {r['ctr']:.2%}")
        lines.append(f"• Avg Position: {r['position']:.1f}")
        lines.append("")
    else:
        lines.append("📈 **Overall Performance**")
        lines.append("• No data available for this period")
        lines.append("")
    
    # Previous week comparison
    prev_data = query_gsc(authed_session, prev_start_date, prev_end_date)
    if 'rows' in data and 'rows' in prev_data and data['rows'] and prev_data['rows']:
        curr = data['rows'][0]
        prev = prev_data['rows'][0]
        
        clicks_diff = curr['clicks'] - prev['clicks']
        impressions_diff = curr['impressions'] - prev['impressions']
        ctr_diff = curr['ctr'] - prev['ctr']
        pos_diff = curr['position'] - prev['position']
        
        lines.append("📊 **Week-over-Week Change**")
        lines.append(f"• Clicks: {'+' if clicks_diff >= 0 else ''}{clicks_diff}")
        lines.append(f"• Impressions: {'+' if impressions_diff >= 0 else ''}{impressions_diff}")
        lines.append(f"• CTR: {'+' if ctr_diff >= 0 else ''}{ctr_diff:.2%}")
        lines.append(f"• Position: {'+' if pos_diff >= 0 else ''}{pos_diff:.1f}")
        lines.append("")
    
    # Top queries
    data = query_gsc(authed_session, start_date, end_date, dimensions=['query'], row_limit=10)
    if 'rows' in data and data['rows']:
        lines.append("🔍 **Top 10 Queries by Impressions**")
        for i, r in enumerate(data['rows'], 1):
            q = r['keys'][0]
            lines.append(f"{i}. {q} (imp: {r['impressions']}, clicks: {r['clicks']}, pos: {r['position']:.1f})")
        lines.append("")
    
    # Top pages
    data = query_gsc(authed_session, start_date, end_date, dimensions=['page'], row_limit=10)
    if 'rows' in data and data['rows']:
        lines.append("📄 **Top 10 Pages by Impressions**")
        for i, r in enumerate(data['rows'], 1):
            p = r['keys'][0].replace('https://appnary.com', '')
            if not p:
                p = '/'
            lines.append(f"{i}. {p} (imp: {r['impressions']}, clicks: {r['clicks']}, pos: {r['position']:.1f})")
        lines.append("")
    
    # Indexing status
    resp = authed_session.get(f"{BASE_URL}/sites/{PROPERTY}/sitemaps")
    sitemaps = resp.json().get('sitemap', [])
    if sitemaps:
        sm = sitemaps[0]
        urls_count = len(sm.get('contents', []))
        lines.append("🗺️ **Sitemap Status**")
        lines.append(f"• Last submitted: {sm.get('lastSubmitted', 'N/A')[:10]}")
        lines.append(f"• URLs discovered: {urls_count}")
        lines.append("")
    
    lines.append("---")
    lines.append("Generated by Appnary GSC Monitor")
    
    return "\n".join(lines)


if __name__ == "__main__":
    try:
        report = generate_report()
        print(report)
    except Exception as e:
        print(f"Error generating report: {e}")
        sys.exit(1)
