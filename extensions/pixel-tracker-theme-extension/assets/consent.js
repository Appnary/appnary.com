/**
 * Pixel Tracker — Consent Management Adapter
 *
 * Auto-detects Cookiebot, OneTrust, and generic CMP.
 * Provides a unified API for checking marketing consent before firing pixels.
 *
 * API:
 *   PixelTrackerConsent.waitForMarketing(callback) — calls back when marketing consent is granted
 *   PixelTrackerConsent.getStatus() — returns current consent state
 *   PixelTrackerConsent.marketingConsented — boolean, current consent status
 *
 * Load this BEFORE tracker.js.
 */
(function () {
  'use strict';

  var CONFIG = document.getElementById('pixel-tracker-config');
  var consentMode = CONFIG ? JSON.parse(CONFIG.textContent).consent_mode || 'auto' : 'auto';

  var state = {
    consented: false,
    checked: false,
    cmp: null,      // 'cookiebot' | 'onetrust' | 'generic' | null
    pending: []     // pending callbacks
  };

  /**
   * Check Cookiebot consent status.
   * Cookiebot sets window.Cookiebot.consent.marketing = true/false
   * and fires "CookiebotOnConsentReady" when consent is known.
   */
  function checkCookiebot(cb) {
    function check() {
      if (window.Cookiebot && window.Cookiebot.consent) {
        if (window.Cookiebot.consent.marketing === true) {
          return true;
        }
        // marketing === false means explicitly denied — don't wait, will never come
        if (window.Cookiebot.consent.marketing === false) {
          return false;
        }
      }
      return null; // not yet known
    }

    var result = check();
    if (result !== null) {
      cb(result);
      return;
    }

    // Wait for Cookiebot consent event
    function onConsentReady() {
      document.removeEventListener('CookiebotOnConsentReady', onConsentReady);
      cb(check() === true);
    }
    document.addEventListener('CookiebotOnConsentReady', onConsentReady);

    // Also try window callback
    var orig = window.CookiebotOnConsentReady;
    window.CookiebotOnConsentReady = function () {
      if (typeof orig === 'function') orig();
      document.removeEventListener('CookiebotOnConsentReady', onConsentReady);
      cb(check() === true);
    };

    // Fallback: poll for up to 10s
    var polls = 0;
    var interval = setInterval(function () {
      polls++;
      var r = check();
      if (r !== null || polls > 20) {
        clearInterval(interval);
        if (r !== null) cb(r === true);
        else cb(false); // timeout — default to no consent
      }
    }, 500);
  }

  /**
   * Check OneTrust consent status.
   * OneTrust sets window.OnetrustActiveGroups as a comma-separated string.
   * Marketing groups typically have "C0004" (or configurable).
   * Fires "OneTrustGroupsUpdated" when consent changes.
   */
  function checkOneTrust(cb) {
    var MARKETING_GROUP = 'C0004';

    function check() {
      if (window.OnetrustActiveGroups) {
        var groups = (window.OnetrustActiveGroups || '').split(',');
        return groups.indexOf(MARKETING_GROUP) !== -1 || groups.indexOf('ALL') !== -1;
      }
      return null;
    }

    var result = check();
    if (result !== null) {
      cb(result);
      return;
    }

    function onUpdate() {
      document.removeEventListener('OneTrustGroupsUpdated', onUpdate);
      cb(check() === true);
    }
    document.addEventListener('OneTrustGroupsUpdated', onUpdate);

    // Fallback: poll
    var polls = 0;
    var interval = setInterval(function () {
      polls++;
      var r = check();
      if (r !== null || polls > 20) {
        clearInterval(interval);
        if (r !== null) cb(r === true);
        else cb(false);
      }
    }, 500);
  }

  /**
   * Generic / no CMP — just wait for page load and assume default consent.
   * If a CMP is present but unknown, we wait for document.cookie changes
   * or a data-consent attribute on <html>.
   */
  function checkGeneric(cb) {
    // Already loaded — no consent management, proceed
    if (document.readyState === 'complete') {
      cb(true);
      return;
    }

    // Some generic CMPs set a data attribute on <html>
    function checkDataAttr() {
      var attr = document.documentElement.getAttribute('data-consent');
      if (attr) {
        try {
          var parsed = JSON.parse(attr);
          return parsed.marketing === true || parsed.all === true;
        } catch (e) {
          return attr === 'all' || attr === 'marketing';
        }
      }
      return null;
    }

    var r = checkDataAttr();
    if (r !== null) {
      cb(r);
      return;
    }

    // Wait for load
    function onLoad() {
      window.removeEventListener('load', onLoad);
      cb(checkDataAttr() !== false);
    }

    if (document.readyState === 'complete') {
      cb(true);
    } else {
      window.addEventListener('load', onLoad);
      // Also check after 3s as max wait
      setTimeout(function () {
        window.removeEventListener('load', onLoad);
        cb(checkDataAttr() !== false);
      }, 3000);
    }
  }

  /**
   * Initialize consent checking based on configured mode.
   */
  function init(cb) {
    switch (consentMode) {
      case 'cookiebot':
        state.cmp = 'cookiebot';
        checkCookiebot(cb);
        break;
      case 'onetrust':
        state.cmp = 'onetrust';
        checkOneTrust(cb);
        break;
      case 'none':
        // No consent management — always allow
        state.cmp = null;
        cb(true);
        break;
      default:
        // Auto-detect
        if (window.Cookiebot) {
          state.cmp = 'cookiebot';
          checkCookiebot(cb);
        } else if (window.OneTrust) {
          state.cmp = 'onetrust';
          checkOneTrust(cb);
        } else {
          state.cmp = null;
          checkGeneric(cb);
        }
    }
  }

  // Public API
  window.PixelTrackerConsent = {
    /**
     * Register a callback that fires when marketing consent is granted.
     * If consent is already granted, calls immediately.
     */
    waitForMarketing: function (callback) {
      if (typeof callback !== 'function') return;

      if (state.consented) {
        callback();
        return;
      }

      if (state.checked) {
        // Already checked and denied — don't wait forever
        callback();
        return;
      }

      state.pending.push(callback);
    },

    /**
     * Get current consent status.
     */
    getStatus: function () {
      return {
        consented: state.consented,
        checked: state.checked,
        cmp: state.cmp
      };
    },

    /**
     * Whether marketing consent has been granted (read-only).
     */
    get marketingConsented() {
      return state.consented;
    }
  };

  // Initialize on load
  init(function (granted) {
    state.consented = granted;
    state.checked = true;

    if (granted) {
      // Fire all pending callbacks
      for (var i = 0; i < state.pending.length; i++) {
        try { state.pending[i](); } catch (e) { /* skip */ }
      }
      state.pending = [];
    }
  });
})();
