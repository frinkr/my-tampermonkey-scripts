// ==UserScript==
// @name         百度主页清理
// @namespace    https://github.com/frinkr/my-scripts
// @version      0.1
// @description  百度主页清理
// @author       frinkr
// @match        *://www.baidu.com/
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if ($('div[class=s-isindex-wrap')) {
        $('div[class=s-top-wrap]').hide();
        $('div[class=s-bottom-layer]').hide();
        $('div[id=u_sp]').hide();
        $('div[id=s_icons]').hide();
        $('span[class=show-vertical]').hide();
    }
})();