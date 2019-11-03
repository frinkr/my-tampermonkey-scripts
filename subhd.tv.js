// ==UserScript==
// @name         subhd.tv 去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  去除顶层巨大的广告
// @author       frinkr
// @match        *://subhd.tv/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('div').filter(function() {return this.className.match(/^ADTOPLB.*$/);}).remove();
    $("ldgindexbuttom").remove();
})();