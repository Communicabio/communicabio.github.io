"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseEventListeners = exports.canUseDOM = void 0;
var canUseDOM = !!(typeof window !== 'undefined' && window.document &&
/* eslint-disable */
window.document.createElement
/* eslint-enable */
);
exports.canUseDOM = canUseDOM;
var canUseEventListeners = canUseDOM && !!window.addEventListener;
exports.canUseEventListeners = canUseEventListeners;
//# sourceMappingURL=dom.js.map