"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;
exports.isFunction = isFunction;

// Является ли переданное значение числовым
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
} // Является ли переданное значение функцией


function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=utils.js.map