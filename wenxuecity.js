// ==UserScript==
// @name         文学城去广告
// @namespace    https://github.com/frinkr/my-scripts
// @version      0.2
// @description  文学城Kill Ads
// @author       frinkr
// @match        *://www.wenxuecity.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    setInterval(function () {
        $('div[class=wxc-ab-root]').hide();
        document.body.style.position = '';
        document.body.style.top = ''
    }, 500)
})();
