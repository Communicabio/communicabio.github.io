"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var baseClassName = (0, _getClassName.default)('Counter');

var Counter = function Counter(props) {
  var mode = props.mode,
      size = props.size,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classNames.default)(baseClassName, "Counter--".concat(mode), "Counter--s-".concat(size))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Counter__in"
  }, children));
};

Counter.defaultProps = {
  mode: 'secondary',
  size: 'm'
};

var _default = _react.default.memo(Counter);

exports.default = _default;
//# sourceMappingURL=Counter.js.map