// ==UserScript==
// @name         devRant Decolorizer
// @namespace    https://devrant.com/
// @version      0.1
// @description  Removes all the fancy colors according to the style.
// @author       Alice
// @match        https://devrant.com/rants/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = `.rant-banner { background-color: var(--colorDarkBlue) !important; }
    .rant-avatar-scroll img { border-radius: 50%; }
    .notif-badge { border-color: var(--colorDarkBlue) !important; }
    .icon-rantsemoticon-base1, .icon-rantsemoticon-emoji1 { opacity: 1 !important; }
    .icon-rantsemoticon2 { opacity: 0 !important; }`;
    document.body.appendChild(style);
})();