import type { BlogPost } from "@/lib/blog";

// Vigil-intent guides. Claims about Vigil match /vigil: it is in development, in testing on
// development stores, and not on the Shopify App Store. Keep it that way until the listing is live.

const vigilNote = `Vigil is our scanner for this. It is in development, not on the Shopify App Store yet, and it cannot be installed today. [Read what it checks](/vigil) or [join the waitlist](/vigil#waitlist).`;

export const vigilPosts: BlogPost[] = [
  {
    slug: "remove-leftover-app-code-shopify-theme",
    title: "How to Remove Leftover App Code From a Shopify Theme",
    seoTitle: "Remove Leftover App Code From Shopify",
    excerpt:
      "Uninstalling a Shopify app does not always clean the theme. Here is where leftover code hides, how to find it, and how to remove it without breaking the storefront.",
    metaDescription:
      "Uninstalled a Shopify app but the code is still in your theme? Find leftover snippets, scripts, and app embeds, and remove them safely.",
    category: "Security",
    publishedAt: "2026-10-14",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["Shopify security", "Theme code", "Apps"],
    tldr: `Apps built with theme app extensions clean up after themselves. Older apps that edited theme files often do not. Duplicate the theme, search for the old app's name and domain, check app embeds, then delete only what you can tie to the app.`,
    body: `When you uninstall a Shopify app, the app stops running on Shopify's side. Whether its code leaves your theme depends on how the app was built.

Apps that use theme app extensions add blocks and embeds that Shopify disables when the app is removed. Apps that were installed by editing theme files, often older ones, can leave snippets, sections, and script tags behind. Those leftovers keep loading on the storefront, and a script from a vendor you no longer use is still a script you are trusting.

## Back up before you touch anything

In the admin, open Online Store, then Themes. On the live theme, open the three-dot menu and choose Duplicate. Do all the work on the copy, preview it, and publish it only when the storefront looks right. Deleting the wrong line from a live theme is the usual way this goes wrong.

## Where leftovers hide

- theme.liquid. Look for script and link tags that point at a vendor you no longer use. The domain usually gives the app away.
- Snippets and Sections folders. Files are often named after the app, such as a snippet with the vendor's name, and rendered from theme.liquid or a template with a render tag.
- App embeds. In the theme editor, open the App embeds tab. An old embed can still be switched on.
- Templates. Product and cart templates sometimes include a render call for a snippet that no longer does anything.

## Find the code

Search the code editor for the app's name, then for the domain its scripts loaded from. Then open your storefront, open the browser's developer tools, and look at the Network tab. Every third-party domain that loads is listed there, with its size. A domain you do not recognize is worth a closer look.

## Remove it

Delete the render call or script tag first, then the snippet file it pointed to, and reload the preview after each step. If something breaks, undo the last edit. Do not delete a line you cannot tie to the app.

## Why it is worth the afternoon

Leftover code is dead weight at best. At worst it is a script from a company you no longer have a relationship with, running on every page, including ones that handle customer details. If the vendor's domain changes hands or is compromised, your storefront loads whatever is served there.

${vigilNote} It is built to name the theme file or app behind each external script, so this search is one scan instead of a hunt.`,
    faqs: [
      {
        q: `Does uninstalling a Shopify app remove its code from my theme?`,
        a: `Not always. Apps built with theme app extensions are disabled when you uninstall them. Apps that edited your theme files can leave snippets and script tags behind, and you have to remove those yourself.`,
      },
      {
        q: `How do I know which app a script belongs to?`,
        a: `Search the theme code for the app's name and the domain its scripts loaded from, check the App embeds tab in the theme editor, and use the browser Network tab to see which third-party domains load on the storefront.`,
      },
      {
        q: `Is it safe to delete code from the live theme?`,
        a: `Duplicate the theme first and work on the copy. Publish it only after you have previewed the storefront and checked the pages that used the app.`,
      },
    ],
  },
  {
    slug: "find-which-shopify-app-added-a-script",
    title: "How to Find Which Shopify App Added a Script to Your Storefront",
    seoTitle: "Find Which Shopify App Added a Script",
    excerpt:
      "Shopify does not tell you which app injected a script. Three ways to trace a third-party script on your storefront back to the app or theme file behind it.",
    metaDescription:
      "Shopify does not say which app added a script. Trace any third-party script on your storefront to its app, embed, or theme file with these steps.",
    category: "Security",
    publishedAt: "2026-10-14",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["Shopify security", "Third-party scripts", "Apps"],
    tldr: `List the domains that load on your storefront in the browser Network tab, match each to an app, then look for it in app embeds and the theme files. Scripts hard-coded in the theme are the ones that do not show up in the app list.`,
    body: `Shopify's admin lists your installed apps. It does not list the scripts those apps put on your storefront, and it does not tell you which app a given script came from. Tracing a script takes three steps.

## Step 1: list what loads

Open your storefront in a private window, open the browser's developer tools, and go to the Network tab. Reload the page and filter by JS. Group what you see by domain. Your own domain, Shopify's domains, and the domains of tools you set up on purpose are expected. Everything else needs an owner.

Check a product page, the cart, and the homepage. Different pages load different scripts. Checkout has its own rules on what can run, so do not expect your storefront scripts to appear there.

## Step 2: match each domain to a source

A script gets onto a storefront in one of four ways:

- App embed. Switched on in the theme editor's App embeds tab. Easy to find, and easy to turn off there.
- App block. Added to a section by the app. It appears in the section list in the theme editor.
- Theme code. A script tag typed into theme.liquid or a snippet, by an app's installer, a developer, or an agency. This is the one the app list will not show you.
- Tag manager. A script loaded by Google Tag Manager or a similar tool. It does not appear in the theme at all, and it can load more scripts that you did not add.

Search the theme code for each unknown domain. If there is a hit, the file and line tell you where it came from. If there is no hit, check the embeds and your tag manager.

## Step 3: decide

For each script, you want an answer to three questions. Which app or person put it there? Do you still use that app? What does it have access to on the page? A script on a product page can read what is on that page. A script that also loads on pages with forms can read what customers type.

Anything you cannot answer for is a candidate to remove. Turn embeds off in the theme editor. For theme code, duplicate the theme and delete on the copy first, as in our guide to [removing leftover app code](/blog/remove-leftover-app-code-shopify-theme).

${vigilNote} Its scan ties each external script to a file or an app name, and reads the rendered page too, so scripts added at runtime show up.`,
    faqs: [
      {
        q: `Can Shopify tell me which app added a script?`,
        a: `Not directly. The admin shows installed apps, but not the scripts they place on the storefront. You trace a script by its domain, the App embeds tab, and a search of the theme code.`,
      },
      {
        q: `Why can't I find a script in my theme files?`,
        a: `It may come from an app embed, an app block, or a tag manager. Tag manager scripts never appear in the theme code.`,
      },
      {
        q: `Are third-party scripts on my storefront a risk?`,
        a: `Each one runs with the same access as your own code on that page. A script from a vendor you no longer use, or one that loads further scripts, is the kind to review first.`,
      },
    ],
  },
  {
    slug: "shopify-staff-permissions-audit",
    title: "Shopify Staff Permissions Audit: A 20-Minute Checklist",
    seoTitle: "Shopify Staff Permissions Audit Checklist",
    excerpt:
      "Old staff, freelancers, and agencies keep access long after the work ends. A short checklist to review who can reach your Shopify admin, and what they can change.",
    metaDescription:
      "Review who can access your Shopify admin. A 20-minute checklist for staff, collaborator, and app access that you can run every quarter.",
    category: "Security",
    publishedAt: "2026-10-14",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["Shopify security", "Staff accounts", "Checklist"],
    tldr: `List every staff and collaborator account, remove the ones with no current job, cut the rest to the permissions they use, and turn on two-step verification. Repeat every quarter and after any agency or freelancer finishes.`,
    body: `Most store takeovers do not start with clever code. They start with an account that still works. A freelancer from two years ago, a former employee, an agency login that was shared in a chat. This audit takes about twenty minutes.

## 1. List every account

In the Shopify admin, open Settings, then Users. Write down every staff account and every collaborator. For each one, ask who it is, what they do for the store now, and whether they still need access. An account nobody can explain is the first one to remove.

## 2. Remove what has no current job

Remove staff who left and collaborators whose project ended. If an agency still works with you, keep one named login for the project, not a shared one. A shared login tells you nothing about who changed what.

## 3. Cut permissions to what is used

Staff permissions are set per area: orders, products, apps, themes, settings, and so on. Full access is rarely needed. Someone who answers support tickets does not need to edit the theme or install apps. Anyone who can install apps or edit code can put a script on your storefront, so treat those two permissions as the sensitive ones.

## 4. Turn on two-step verification

Reused passwords are the usual way into an account. On most plans each person has to set up two-step verification on their own account, so ask them to, and check that they did. On Shopify Plus you can require it for the whole organization.

## 5. Review the apps

Open Settings, then Apps and sales channels. Remove apps you no longer use. For the ones you keep, look at what access each app has. An app that was set up years ago with access it does not need is the same problem as a staff account nobody remembers.

## 6. Look at the recent history

Read the recent activity for changes you did not expect: a new staff account, a changed permission, a theme edit at an odd hour. Shopify's admin shows a limited number of recent events, so do this review often enough that the evidence is still there.

## Make it a habit

Put the review on the calendar once a quarter, and run it again when an agency or freelancer finishes. For a theme-side check to go with it, see how to [find which app added a script](/blog/find-which-shopify-app-added-a-script).

${vigilNote} It does not replace this review, because it does not read staff accounts.`,
    faqs: [
      {
        q: `How often should I audit Shopify staff permissions?`,
        a: `Once a quarter, and whenever an employee leaves or an agency or freelancer finishes a project.`,
      },
      {
        q: `Which staff permissions are the most sensitive?`,
        a: `Anything that lets a person install apps or edit theme code, because both can put a script on the storefront. Also settings and user management.`,
      },
      {
        q: `Can I force two-step verification for all staff?`,
        a: `On Shopify Plus, yes, at the organization level. On other plans each person sets it up on their own account, so ask them and check.`,
      },
    ],
  },
  {
    slug: "shopify-theme-leaked-api-keys",
    title: "Leaked API Keys in a Shopify Theme: How to Check and What to Do",
    seoTitle: "Leaked API Keys in a Shopify Theme",
    excerpt:
      "Theme code is public to every visitor. A key pasted into it is public too. How to look for secrets in your theme, which ones matter, and how to rotate them.",
    metaDescription:
      "Anyone can read your Shopify theme code. Check for leaked API keys and tokens, learn which ones are safe, and rotate any that are not.",
    category: "Security",
    publishedAt: "2026-10-14",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["Shopify security", "API keys", "Theme code"],
    tldr: `Anything in the storefront theme can be read by any visitor. Search it for access tokens and secret-looking strings. Storefront API tokens and pixel IDs are meant to be public. Admin API tokens and shared secrets are not, and must be rotated if they were ever exposed.`,
    body: `A Shopify theme is sent to every visitor's browser. Liquid runs on Shopify's servers, but what it outputs, and every JavaScript file in the theme assets, is readable by anyone who opens developer tools. A secret pasted into a theme is not a secret.

It happens more than it should. A developer tests an integration, pastes a token into a snippet, and moves on. An agency hard-codes a key so a feature works. An old app leaves its configuration behind.

## What is fine to have in a theme

Some values are designed to be public. A Storefront API access token is meant for use in the browser. Analytics measurement IDs and ad pixel IDs are public identifiers. Finding these is not a leak.

## What is not

- Admin API access tokens. Shopify's Admin API tokens commonly begin with shpat_. They grant access to store data and settings. They belong on a server and nowhere else.
- API secret keys and shared secrets for apps or webhooks.
- Keys for third-party services that charge per use or can read data: email, SMS, mapping, payment, or AI services.
- Passwords or credentials of any kind in a comment or a snippet.

## How to check

In the theme code editor, search for terms such as token, secret, api_key, apikey, password, and bearer. Search for the prefix shpat_. Open the matches in JavaScript files under assets and in snippets that print values into script tags. Then look at the live storefront's page source, because an app can inject a value that is not in the theme files.

## If you find one

1. Treat it as exposed from the day it was first added, not the day you found it.
2. Rotate it. In the service or app that issued it, generate a new key and revoke the old one. Removing it from the theme does not make the old key safe.
3. Check what that key could access and whether anything unexpected happened with it.
4. Move the new key to a server or to an app that holds it, and take it out of theme code.

## Make it a routine

Search the theme after every developer or agency change, and before you hand a theme to someone else. Also see how to [remove leftover app code](/blog/remove-leftover-app-code-shopify-theme), since old integrations are where forgotten keys tend to live.

${vigilNote} It flags secret-looking strings in theme code and embeds and names the file, without showing the secret itself.`,
    faqs: [
      {
        q: `Can visitors really read my Shopify theme code?`,
        a: `They can read everything the theme sends to the browser, which includes JavaScript files and the rendered HTML. Server-side Liquid logic is not visible, but anything it outputs is.`,
      },
      {
        q: `Is a Storefront API token a leak?`,
        a: `No. Storefront API tokens are designed to be used in the browser. Admin API tokens are different and must never be in a theme.`,
      },
      {
        q: `I deleted the key from my theme. Am I safe?`,
        a: `No. If it was ever visible, assume someone copied it. Rotate it at the service that issued it and revoke the old one.`,
      },
    ],
  },
  {
    slug: "scan-shopify-store-security-with-ai-agent-mcp",
    title: "Scan a Shopify Store for Risky Scripts From Claude, ChatGPT, or Cursor",
    seoTitle: "Scan a Shopify Store With an AI Agent (MCP)",
    excerpt:
      "What it looks like to ask an AI agent to scan a Shopify store over MCP, what comes back, and what a person still has to decide.",
    metaDescription:
      "Run a Shopify store security scan from Claude, ChatGPT, or Cursor over MCP. What the agent gets back, and what stays your decision.",
    category: "Security",
    publishedAt: "2026-10-14",
    author: "The Appnary Team",
    readingMinutes: 4,
    tags: ["MCP", "Shopify security", "AI agents", "Vigil"],
    tldr: `Vigil exposes its store scan over MCP, so an agent can ask for a scan and get structured findings back: the script, its source, and why it was flagged. This is in testing on development stores. The merchant still decides what to turn off.`,
    body: `MCP, the Model Context Protocol, is a way for an AI agent to call tools in another system. A store scanner is a good fit: the agent asks for a scan, and the scanner returns findings in a form the agent can read.

## What the agent can ask for

Vigil's MCP tools are scan_store, warm_live_page, block_host, unblock_host, and list_blocked_hosts. A per-store agent token controls which store a connection can reach. In testing, you create the token for a store yourself.

- scan_store returns findings for the published theme, app embeds, app blocks, and external frames.
- warm_live_page loads the rendered storefront so scripts added at runtime can be seen.
- block_host, unblock_host, and list_blocked_hosts turn a script host off on the storefront, undo that, and show what is currently off.

## What comes back

Each finding names the script, its source (a theme file and line, or an app), and the reason it was flagged. A flagged secret is reported without printing the secret. Because the output is structured, an agent can sort it, group it by app, and explain it in plain words.

## What stays with a person

An agent can read the findings and draft a plan. The decision to turn a script off is a merchant's. A script can be one you need, and blocking it can break a checkout flow or a tracking setup. Vigil blocks scripts that load after its blocker embed, and for scripts hard-coded in the theme head it flags the line to remove instead. The first version does not uninstall apps, and it does not read customer records or order contents.

## Where this stands

This is in testing on development stores. Public MCP access for every store, and the Shopify App Store listing, are planned and not available. If you want a manual version of the same check today, start with [how to find which app added a script](/blog/find-which-shopify-app-added-a-script).

[Read the Vigil notes](/docs) or [join the waitlist](/vigil#waitlist). There is no install link until Shopify approves the app.`,
    faqs: [
      {
        q: `What is MCP?`,
        a: `The Model Context Protocol is a standard way for an AI agent such as Claude, ChatGPT, or Cursor to call tools in another system and read structured results.`,
      },
      {
        q: `Can an agent turn off a script by itself?`,
        a: `Vigil has a block tool, but the decision is the merchant's. The first version does not uninstall apps.`,
      },
      {
        q: `Can I use this today?`,
        a: `Only in testing on development stores with a per-store token. Public access and the App Store listing are planned.`,
      },
    ],
  },
];
