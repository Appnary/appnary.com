/**
 * Pixel Tracker — Storefront Pixel Injection Engine
 *
 * Reads tracking key configuration from pixel-tracker-config JSON,
 * injects the appropriate pixel/tag scripts asynchronously, subscribes
 * to Shopify Web Pixels API events for conversion tracking, and
 * respects consent management via PixelTrackerConsent.
 *
 * Load AFTER consent.js.
 *
 * Platforms supported:
 *   google_ads  — Google Ads (gtag.js)
 *   facebook    — Meta/Facebook Pixel
 *   tiktok      — TikTok Pixel
 *   pinterest   — Pinterest Tag
 *   linkedin    — LinkedIn Insight Tag
 *   snapchat    — Snapchat Pixel
 *   twitter     — Twitter/X Pixel
 */
(function () {
  'use strict';

  /* ── Config ─────────────────────────────────────────── */

  var CONFIG_EL = document.getElementById('pixel-tracker-config');
  if (!CONFIG_EL) return; // no configuration — nothing to do

  var config;
  try {
    config = JSON.parse(CONFIG_EL.textContent);
  } catch (e) {
    if (console && console.warn) console.warn('[Pixel Tracker] Invalid config JSON', e);
    return;
  }

  var DEBUG = config.debug === true || config.debug === 'true';
  var consent = window.PixelTrackerConsent;

  function log() {
    if (DEBUG && console && console.log) {
      console.log('[Pixel Tracker]', Array.prototype.join.call(arguments, ' '));
    }
  }

  /* ── Platform Definitions ────────────────────────────── */
  /*
   * Each platform defines:
   *   id         — key name in config
   *   priority   — load order (lower = sooner)
   *   inject     — function(key) that injects the pixel script/tag
   *   fireEvent  — function(eventName, eventData) fires a conversion/event
   *   consentCat — consent category (default: marketing)
   */

  var PLATFORMS = [{
    id: 'google_ads',
    priority: 1,
    inject: function (key) {
      // gtag.js — Google Ads / Google Analytics 4
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', key);

      // Inject the gtag.js script
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(key);
      document.head.appendChild(s);

      log('gtag.js loaded for', key);
    },
    fireEvent: function (name, data) {
      if (typeof window.gtag !== 'function') return;
      var params = {};
      if (name === 'purchase') {
        params.transaction_id = data.transactionId || data.orderId;
        params.value = data.totalPrice || data.revenue;
        params.currency = data.currency || 'USD';
        params.items = (data.items || []).map(function (i) {
          return { item_id: i.productId || i.variantId, item_name: i.productTitle, quantity: i.quantity, price: i.price };
        });
        window.gtag('event', 'purchase', params);
      } else if (name === 'view_content') {
        params.items = (data.items || []).map(function (i) {
          return { item_id: i.productId || i.variantId, item_name: i.productTitle };
        });
        window.gtag('event', 'view_item', params);
      } else if (name === 'search') {
        params.search_term = data.searchTerm || data.query;
        window.gtag('event', 'search', params);
      } else if (name === 'add_to_cart') {
        params.items = (data.items || []).map(function (i) {
          return { item_id: i.productId || i.variantId, item_name: i.productTitle, quantity: i.quantity, price: i.price };
        });
        window.gtag('event', 'add_to_cart', params);
      }
    }
  }, {
    id: 'facebook',
    priority: 2,
    inject: function (key) {
      // Meta/Facebook Pixel
      /* eslint-disable */
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */
      window.fbq('init', key);
      window.fbq('track', 'PageView');
      log('Facebook Pixel loaded for', key);
    },
    fireEvent: function (name, data) {
      if (typeof window.fbq !== 'function') return;
      switch (name) {
        case 'purchase':
          window.fbq('track', 'Purchase', {
            value: data.totalPrice || data.revenue,
            currency: data.currency || 'USD',
            content_ids: (data.items || []).map(function (i) { return i.productId; }),
            content_type: 'product'
          });
          break;
        case 'view_content':
          window.fbq('track', 'ViewContent', {
            content_ids: (data.items || []).map(function (i) { return i.productId; }),
            content_type: 'product'
          });
          break;
        case 'search':
          window.fbq('track', 'Search', { search_string: data.searchTerm || data.query });
          break;
        case 'add_to_cart':
          window.fbq('track', 'AddToCart', {
            content_ids: (data.items || []).map(function (i) { return i.productId; }),
            content_type: 'product',
            value: data.totalPrice || data.revenue,
            currency: data.currency || 'USD'
          });
          break;
      }
      log('Facebook event:', name);
    }
  }, {
    id: 'tiktok',
    priority: 3,
    inject: function (key) {
      // TikTok Pixel
      /* eslint-disable */
      !function (w, d, t) {
        w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie','holdConsent','revokeConsent','grantConsent'],
        ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
        for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
        ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
        ttq.load=function(e,n){var r='https://analytics.tiktok.com/i18n/pixel/events.js',o=n&&n.partner;
        ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
        n=document.createElement('script');n.type='text/javascript';n.async=true;n.src=r+'?sdkid='+e+'&lib='+t;
        e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(n,e)};
      }(window, document, 'ttq');
      /* eslint-enable */
      ttq.load(key);
      ttq.page();
      log('TikTok Pixel loaded for', key);
    },
    fireEvent: function (name, data) {
      if (typeof window.ttq === 'undefined') return;
      switch (name) {
        case 'purchase':
          ttq.track('Purchase', {
            value: data.totalPrice || data.revenue,
            currency: data.currency || 'USD',
            contents: (data.items || []).map(function (i) { return { content_id: i.productId, quantity: i.quantity, price: i.price }; })
          });
          break;
        case 'view_content':
          ttq.track('ViewContent', {
            contents: (data.items || []).map(function (i) { return { content_id: i.productId }; })
          });
          break;
        case 'search':
          ttq.track('Search', { query: data.searchTerm || data.query });
          break;
        case 'add_to_cart':
          ttq.track('AddToCart', {
            content_id: (data.items && data.items[0]) ? data.items[0].productId : undefined,
            quantity: (data.items && data.items[0]) ? data.items[0].quantity : 1
          });
          break;
      }
      log('TikTok event:', name);
    }
  }, {
    id: 'pinterest',
    priority: 4,
    inject: function (key) {
      // Pinterest Tag
      /* eslint-disable */
      !function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(
        Array.prototype.slice.call(arguments))};var
        n=window.pintrk;n.queue=[],n.version='3.0';var
        t=document.createElement('script');t.async=!0,t.src=e;var
        r=document.getElementsByTagName('script')[0];r.parentNode.insertBefore(t,r)}}(
        'https://s.pinimg.com/ct/core.js');
      /* eslint-enable */
      window.pintrk('load', key, { np: 'appnary' });
      window.pintrk('page');
      log('Pinterest Tag loaded for', key);
    },
    fireEvent: function (name, data) {
      if (typeof window.pintrk !== 'function') return;
      switch (name) {
        case 'purchase':
          pintrk('track', 'checkout', {
            value: data.totalPrice || data.revenue,
            currency: data.currency || 'USD',
            order_quantity: data.items ? data.items.length : 0
          });
          break;
        case 'view_content':
          pintrk('track', 'pagevisit', {
            product_id: data.items && data.items[0] ? data.items[0].productId : undefined
          });
          break;
        case 'search':
          pintrk('track', 'search', { search_query: data.searchTerm || data.query });
          break;
        case 'add_to_cart':
          pintrk('track', 'addtocart', {
            product_id: data.items && data.items[0] ? data.items[0].productId : undefined,
            quantity: data.items && data.items[0] ? data.items[0].quantity : 1
          });
          break;
      }
      log('Pinterest event:', name);
    }
  }, {
    id: 'linkedin',
    priority: 5,
    inject: function (key) {
      // LinkedIn Insight Tag
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(key);

      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      document.head.appendChild(s);
      log('LinkedIn Insight Tag loaded for', key);
    },
    fireEvent: function (name, data) {
      // LinkedIn doesn't have a standard JS API for conversion events
      // beyond page views; conversions are typically set server-side
      log('LinkedIn event (page view only):', name);
    }
  }, {
    id: 'snapchat',
    priority: 6,
    inject: function (key) {
      // Snapchat Pixel
      /* eslint-disable */
      (function(e,n,t){if(e._snaptr){return;}var a=e._snaptr=function(){
        a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
        a.queue=[];var s='script';var r=n.createElement(s);r.async=!0;
        r.src=t;var u=n.getElementsByTagName(s)[0];
        u.parentNode.insertBefore(r,u);})(window,document,
        'https://sc-static.net/scevent.min.js');
      /* eslint-enable */
      window._snaptr('init', key);
      window._snaptr('track', 'PAGE_VIEW');
      log('Snapchat Pixel loaded for', key);
    },
    fireEvent: function (name, data) {
      if (typeof window._snaptr !== 'function') return;
      switch (name) {
        case 'purchase':
          window._snaptr('track', 'PURCHASE', {
            price: data.totalPrice || data.revenue,
            currency: data.currency || 'USD',
            item_ids: (data.items || []).map(function (i) { return i.productId; })
          });
          break;
        case 'view_content':
          window._snaptr('track', 'VIEW_CONTENT', {
            item_ids: (data.items || []).map(function (i) { return i.productId; })
          });
          break;
        case 'search':
          window._snaptr('track', 'SEARCH', { query: data.searchTerm || data.query });
          break;
        case 'add_to_cart':
          window._snaptr('track', 'ADD_CART', {
            price: data.totalPrice || data.revenue,
            currency: data.currency || 'USD',
            item_ids: (data.items || []).map(function (i) { return i.productId; })
          });
          break;
      }
      log('Snapchat event:', name);
    }
  }, {
    id: 'twitter',
    priority: 7,
    inject: function (key) {
      // Twitter/X Pixel (Universal Website Tag)
      /* eslint-disable */
      !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
      },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      /* eslint-enable */
      window.twq('config', key);
      log('Twitter Pixel loaded for', key);
    },
    fireEvent: function (name, data) {
      if (typeof window.twq !== 'function') return;
      switch (name) {
        case 'purchase':
          window.twq('event', 'tw-purchase-XXXXXXXX', {
            value: data.totalPrice || data.revenue,
            currency: data.currency || 'USD',
            conversion_id: data.transactionId || data.orderId
          });
          break;
        case 'view_content':
          window.twq('event', 'tw-view-content-XXXXXXXX', {});
          break;
        case 'search':
          window.twq('event', 'tw-search-XXXXXXXX', {});
          break;
        case 'add_to_cart':
          window.twq('event', 'tw-add-to-cart-XXXXXXXX', {});
          break;
      }
      log('Twitter event:', name);
    }
  }];

  /* ── Determine which platforms are active ────────────── */

  var activePlatforms = PLATFORMS.filter(function (p) {
    return config[p.id] && config[p.id] !== '';
  }).sort(function (a, b) { return a.priority - b.priority; });

  if (activePlatforms.length === 0) {
    log('No tracking keys configured.');
    return;
  }

  log('Active platforms:', activePlatforms.map(function (p) { return p.id; }).join(', '));

  /* ── Inject pixels ───────────────────────────────────── */

  /**
   * Actually inject the pixel scripts for all active platforms.
   * Called either immediately (no consent) or after consent granted.
   */
  function injectPixels() {
    // High priority (1-2): inject immediately
    activePlatforms.forEach(function (p) {
      if (p.priority <= 2) {
        try { p.inject(config[p.id]); } catch (e) { log('Error injecting', p.id, e); }
      }
    });

    // Lower priority: defer via requestIdleCallback
    var deferred = activePlatforms.filter(function (p) { return p.priority > 2; });

    if (deferred.length === 0) return;

    function injectDeferred() {
      deferred.forEach(function (p) {
        try { p.inject(config[p.id]); } catch (e) { log('Error injecting', p.id, e); }
      });
    }

    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(injectDeferred, { timeout: 3000 });
    } else {
      setTimeout(injectDeferred, 500);
    }
  }

  /* ── Consent gate ────────────────────────────────────── */

  if (consent && typeof consent.waitForMarketing === 'function') {
    consent.waitForMarketing(injectPixels);
  } else {
    // No consent adapter — inject immediately
    injectPixels();
  }

  /* ── Web Pixels API Subscription ─────────────────────── */
  /*
   * Shopify's Web Pixels API provides standard storefront events.
   * We subscribe to:
   *   - checkout_completed  → purchase
   *   - product_viewed      → ViewContent
   *   - search_submitted    → Search
   *   - cart_line_add       → AddToCart
   *
   * Reference: https://shopify.dev/docs/api/analytics
   */

  function subscribeToWebPixels() {
    var analytics = window.analytics;

    // Modern Shopify Web Pixels API (analytics.subscribe)
    if (analytics && typeof analytics.subscribe === 'function') {
      log('Subscribing to Web Pixels API');

      analytics.subscribe('checkout_completed', function (event) {
        log('Web Pixels: checkout_completed', event);
        var data = event.data || event.detail || {};
        fireEventAll('purchase', {
          transactionId: data.orderId || data.id,
          orderId: data.orderId || data.id,
          totalPrice: data.totalPrice?.amount || data.totalPrice,
          revenue: data.totalPrice?.amount || data.totalPrice,
          currency: data.totalPrice?.currency || 'USD',
          items: data.lineItems || data.items || []
        });
      });

      analytics.subscribe('product_viewed', function (event) {
        log('Web Pixels: product_viewed', event);
        var data = event.data || event.detail || {};
        fireEventAll('view_content', {
          items: [{
            productId: data.productId || data.id,
            productTitle: data.title || data.productTitle
          }]
        });
      });

      analytics.subscribe('search_submitted', function (event) {
        log('Web Pixels: search_submitted', event);
        var data = event.data || event.detail || {};
        fireEventAll('search', {
          searchTerm: data.searchTerm || data.query,
          query: data.searchTerm || data.query
        });
      });

      analytics.subscribe('cart_line_add', function (event) {
        log('Web Pixels: cart_line_add', event);
        var data = event.data || event.detail || {};
        fireEventAll('add_to_cart', {
          items: [{
            productId: data.productId || data.id,
            quantity: data.quantity || 1,
            price: data.price?.amount || data.price
          }],
          totalPrice: data.price?.amount || data.price,
          revenue: data.price?.amount || data.price,
          currency: data.price?.currency || 'USD'
        });
      });

      return;
    }

    // Fallback: Older analytics or custom events
    log('Web Pixels API not available, using fallback');

    // Observe Shopify AJAX API cart events
    document.addEventListener('ajaxCart:add', function (e) {
      fireEventAll('add_to_cart', { items: [{ productId: e.detail?.id }] });
    });
  }

  /**
   * Fire an event on all active platforms.
   */
  function fireEventAll(eventName, eventData) {
    activePlatforms.forEach(function (p) {
      try {
        p.fireEvent(eventName, eventData);
      } catch (e) {
        log('Error firing', eventName, 'on', p.id, e);
      }
    });
  }

  /* ── Initialize ──────────────────────────────────────── */

  // Subscribe to Web Pixels once page is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    subscribeToWebPixels();
  } else {
    document.addEventListener('DOMContentLoaded', subscribeToWebPixels);
    // Also try on load in case DOMContentLoaded already fired
    window.addEventListener('load', subscribeToWebPixels);
  }

})();
