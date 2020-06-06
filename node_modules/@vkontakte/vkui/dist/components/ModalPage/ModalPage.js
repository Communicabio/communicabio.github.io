"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _utils = require("../../lib/utils");

var _withModalRootContext = _interopRequireDefault(require("../ModalRoot/withModalRootContext"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ModalPage = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ModalPage, _Component);

  var _super = _createSuper(ModalPage);

  function ModalPage() {
    (0, _classCallCheck2.default)(this, ModalPage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ModalPage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.children !== this.props.children) {
        this.props.updateModalHeight();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          header = _this$props.header,
          insets = _this$props.insets,
          platform = _this$props.platform;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames.default)((0, _getClassName.default)('ModalPage', platform), className)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalPage__in-wrap"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalPage__in"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalPage__header"
      }, header), /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalPage__content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalPage__content-in",
        style: (0, _utils.isNumeric)(insets.bottom) ? {
          paddingBottom: insets.bottom
        } : null
      }, children)))));
    }
  }]);
  return ModalPage;
}(_react.Component);

(0, _defineProperty2.default)(ModalPage, "defaultProps", {
  settlingHeight: 75,
  insets: {}
});

var _default = (0, _withInsets.default)((0, _withPlatform.default)((0, _withModalRootContext.default)(ModalPage)));

exports.default = _default;
//# sourceMappingURL=ModalPage.js.map