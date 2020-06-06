import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import Button from '../Button/Button';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import { IOS } from '../../lib/platform';
import { isNumeric } from '../../lib/utils';
import withPlatform from '../../hoc/withPlatform';

var ModalCard = /*#__PURE__*/function (_Component) {
  _inherits(ModalCard, _Component);

  var _super = _createSuper(ModalCard);

  function ModalCard() {
    var _this;

    _classCallCheck(this, ModalCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function (event) {
      var target = event.currentTarget; // eslint-disable-next-line @typescript-eslint/unbound-method

      var action = _this.props.actions[Number(target.dataset.index)].action;

      event.persist();

      if (typeof action === 'function') {
        action(event);
      }
    });

    return _this;
  }

  _createClass(ModalCard, [{
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
      return /*#__PURE__*/React.createElement("div", {
        className: classNames(getClassName('ModalCard', platform))
      }, /*#__PURE__*/React.createElement("div", {
        className: "ModalCard__in"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ModalCard__container",
        style: isNumeric(insets.bottom) ? {
          marginBottom: insets.bottom
        } : null
      }, icon && /*#__PURE__*/React.createElement("div", {
        className: "ModalCard__icon"
      }, icon), header && /*#__PURE__*/React.createElement("div", {
        className: "ModalCard__title"
      }, header), caption && /*#__PURE__*/React.createElement("div", {
        className: "ModalCard__caption"
      }, caption), children, actions.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: classNames('ModalCard__actions', {
          'ModalCard__actions--v': actionsLayout === 'vertical'
        })
      }, actions.map(function (_ref, i) {
        var title = _ref.title,
            mode = _ref.mode;
        return /*#__PURE__*/React.createElement(Button, {
          key: i,
          "data-index": i,
          size: "xl",
          mode: mode,
          onClick: _this2.onButtonClick
        }, title);
      })), platform === IOS && /*#__PURE__*/React.createElement(PanelHeaderButton, {
        className: "ModalCard__dismiss",
        onClick: onClose
      }, /*#__PURE__*/React.createElement(Icon24Dismiss, null)))));
    }
  }]);

  return ModalCard;
}(Component);

_defineProperty(ModalCard, "defaultProps", {
  actions: [],
  actionsLayout: 'horizontal',
  insets: {}
});

export default withPlatform(withInsets(ModalCard));
//# sourceMappingURL=ModalCard.js.map