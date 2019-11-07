// ==UserScript==
// @name         Twitter Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Twitter sidebar
// @author       frinkr
// @match        https://twitter.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    setInterval(function () {
        $('div[data-testid=sidebarColumn]').hide();
    }, 500)
})();