import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
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
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { ANDROID } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';
import withPlatform from '../../hoc/withPlatform';
import { canUseDOM } from '../../lib/dom';

var PopoutWrapper = /*#__PURE__*/function (_Component) {
  _inherits(PopoutWrapper, _Component);

  var _super = _createSuper(PopoutWrapper);

  function PopoutWrapper(props) {
    var _this;

    _classCallCheck(this, PopoutWrapper);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "elRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "animationFinishTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "onFadeInEnd", function (e) {
      if (!e || e.animationName === 'animation-full-fade-in') {
        _this.setState({
          opened: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "preventTouch", function (e) {
      return e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      if (_this.state.opened && _this.props.onClick) {
        _this.props.onClick(e);
      }
    });

    _this.state = {
      opened: false
    };
    _this.elRef = React.createRef();
    return _this;
  }

  _createClass(PopoutWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (canUseDOM) {
        window.addEventListener('touchmove', this.preventTouch, {
          passive: false
        });
        this.waitAnimationFinish(this.elRef.current, this.onFadeInEnd);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Здесь нужен последний аргумент с такими же параметрами, потому что
      // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
      // https://github.com/VKCOM/VKUI/issues/444
      if (canUseDOM) {
        // @ts-ignore (В интерфейсе EventListenerOptions нет поля passive)
        window.removeEventListener('touchmove', this.preventTouch, {
          passive: false
        });
        window.clearTimeout(this.animationFinishTimeout);
      }
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (transitionEvents.supported) {
        var eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';
        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        var platform = this.props.platform;
        this.animationFinishTimeout = window.setTimeout(eventHandler, platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          alignY = _this$props.alignY,
          alignX = _this$props.alignX,
          closing = _this$props.closing,
          children = _this$props.children,
          hasMask = _this$props.hasMask,
          onClick = _this$props.onClick,
          className = _this$props.className,
          platform = _this$props.platform,
          restProps = _objectWithoutProperties(_this$props, ["alignY", "alignX", "closing", "children", "hasMask", "onClick", "className", "platform"]);

      var baseClassNames = getClassName('PopoutWrapper', platform);
      return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
        className: classNames(baseClassNames, "PopoutWrapper--v-".concat(alignY), "PopoutWrapper--h-".concat(alignX), {
          'PopoutWrapper--closing': closing
        }, className),
        onClick: this.onClick,
        ref: this.elRef
      }), hasMask && /*#__PURE__*/React.createElement("div", {
        className: "PopoutWrapper__mask"
      }), /*#__PURE__*/React.createElement("div", {
        className: "PopoutWrapper__container"
      }, children));
    }
  }]);

  return PopoutWrapper;
}(Component);

_defineProperty(PopoutWrapper, "defaultProps", {
  hasMask: true,
  alignY: 'center',
  alignX: 'center',
  closing: false
});

export default withPlatform(PopoutWrapper);
//# sourceMappingURL=PopoutWrapper.js.map