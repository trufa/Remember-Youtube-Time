/*global chrome */

//Credit: http://stackoverflow.com/a/9517879/463065
var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function () {
    'use strict';
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);