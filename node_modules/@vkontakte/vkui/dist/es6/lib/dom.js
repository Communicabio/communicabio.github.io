export var canUseDOM = !!(typeof window !== 'undefined' && window.document &&
/* eslint-disable */
window.document.createElement
/* eslint-enable */
);
export var canUseEventListeners = canUseDOM && !!window.addEventListener;
//# sourceMappingURL=dom.js.map