"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var Placeholder = function Placeholder(props) {
  var className = props.className,
      icon = props.icon,
      header = props.header,
      action = props.action,
      children = props.children,
      stretched = props.stretched;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classNames.default)('Placeholder', {
      'Placeholder--stretched': stretched
    }, className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Placeholder__in"
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "Placeholder__icon"
  }, icon), header && /*#__PURE__*/_react.default.createElement("div", {
    className: "Placeholder__header"
  }, header), children && /*#__PURE__*/_react.default.createElement("div", {
    className: "Placeholder__text"
  }, children), action && /*#__PURE__*/_react.default.createElement("div", {
    className: "Placeholder__action"
  }, action)));
};

var _default = Placeholder;
exports.default = _default;
//# sourceMappingURL=Placeholder.js.map