import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
import withModalRootContext from '../ModalRoot/withModalRootContext';
import withPlatform from '../../hoc/withPlatform';

var ModalPage = /*#__PURE__*/function (_Component) {
  _inherits(ModalPage, _Component);

  var _super = _createSuper(ModalPage);

  function ModalPage() {
    _classCallCheck(this, ModalPage);

    return _super.apply(this, arguments);
  }

  _createClass(ModalPage, [{
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
      return /*#__PURE__*/React.createElement("div", {
        className: classNames(getClassName('ModalPage', platform), className)
      }, /*#__PURE__*/React.createElement("div", {
        className: "ModalPage__in-wrap"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ModalPage__in"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ModalPage__header"
      }, header), /*#__PURE__*/React.createElement("div", {
        className: "ModalPage__content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ModalPage__content-in",
        style: isNumeric(insets.bottom) ? {
          paddingBottom: insets.bottom
        } : null
      }, children)))));
    }
  }]);

  return ModalPage;
}(Component);

_defineProperty(ModalPage, "defaultProps", {
  settlingHeight: 75,
  insets: {}
});

export default withInsets(withPlatform(withModalRootContext(ModalPage)));
//# sourceMappingURL=ModalPage.js.map