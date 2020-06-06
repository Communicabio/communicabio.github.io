"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var Header = function Header(_ref) {
  var className = _ref.className,
      mode = _ref.mode,
      children = _ref.children,
      subtitle = _ref.subtitle,
      indicator = _ref.indicator,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "mode", "children", "subtitle", "indicator", "aside", "getRootRef"]);
  var platform = (0, _usePlatform.default)();
  var baseClassNames = (0, _getClassName.default)('Header', platform);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames.default)(baseClassNames, className, "Header--mode-".concat(mode), {
      'Header--pi': typeof indicator === 'string' || typeof indicator === 'number'
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Header__in"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Header__content"
  }, children, subtitle && /*#__PURE__*/_react.default.createElement("div", {
    className: "Header__subtitle"
  }, subtitle)), indicator && /*#__PURE__*/_react.default.createElement("div", {
    className: "Header__indicator"
  }, indicator), aside && /*#__PURE__*/_react.default.createElement("div", {
    className: "Header__aside"
  }, aside)));
};

Header.defaultProps = {
  mode: 'primary'
};
var _default = Header;
exports.default = _default;
//# sourceMappingURL=Header.js.map