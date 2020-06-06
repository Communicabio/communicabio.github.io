// Является ли переданное значение числовым
export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
} // Является ли переданное значение функцией

export function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=utils.js.map