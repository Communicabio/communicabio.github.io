"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _PanelHeaderButton = _interopRequireDefault(require("../PanelHeaderButton/PanelHeaderButton"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _dismiss = _interopRequireDefault(require("@vkontakte/icons/dist/24/dismiss"));

var _platform = require("../../lib/platform");

var _utils = require("../../lib/utils");

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ModalCard = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ModalCard, _Component);

  var _super = _createSuper(ModalCard);

  function ModalCard() {
    var _this;

    (0, _classCallCheck2.default)(this, ModalCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onButtonClick", function (event) {
      var target = event.currentTarget; // eslint-disable-next-line @typescript-eslint/unbound-method

      var action = _this.props.actions[Number(target.dataset.index)].action;

      event.persist();

      if (typeof action === 'function') {
        action(event);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(ModalCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          insets = _this$props.insets,
          icon = _this$props.icon,
          header = _this$props.header,
          caption = _this$props.caption,
          children = _this$props.children,
          actions = _this$props.actions,
          actionsLayout = _this$props.actionsLayout,
          onClose = _this$props.onClose,
          platform = _this$props.platform;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames.default)((0, _getClassName.default)('ModalCard', platform))
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalCard__in"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalCard__container",
        style: (0, _utils.isNumeric)(insets.bottom) ? {
          marginBottom: insets.bottom
        } : null
      }, icon && /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalCard__icon"
      }, icon), header && /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalCard__title"
      }, header), caption && /*#__PURE__*/_react.default.createElement("div", {
        className: "ModalCard__caption"
      }, caption), children, actions.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames.default)('ModalCard__actions', {
          'ModalCard__actions--v': actionsLayout === 'vertical'
        })
      }, actions.map(function (_ref, i) {
        var title = _ref.title,
            mode = _ref.mode;
        return /*#__PURE__*/_react.default.createElement(_Button.default, {
          key: i,
          "data-index": i,
          size: "xl",
          mode: mode,
          onClick: _this2.onButtonClick
        }, title);
      })), platform === _platform.IOS && /*#__PURE__*/_react.default.createElement(_PanelHeaderButton.default, {
        className: "ModalCard__dismiss",
        onClick: onClose
      }, /*#__PURE__*/_react.default.createElement(_dismiss.default, null)))));
    }
  }]);
  return ModalCard;
}(_react.Component);

(0, _defineProperty2.default)(ModalCard, "defaultProps", {
  actions: [],
  actionsLayout: 'horizontal',
  insets: {}
});

var _default = (0, _withPlatform.default)((0, _withInsets.default)(ModalCard));

exports.default = _default;
//# sourceMappingURL=ModalCard.js.map