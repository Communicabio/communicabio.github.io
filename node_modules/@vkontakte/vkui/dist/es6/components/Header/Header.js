import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var Header = function Header(_ref) {
  var className = _ref.className,
      mode = _ref.mode,
      children = _ref.children,
      subtitle = _ref.subtitle,
      indicator = _ref.indicator,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "mode", "children", "subtitle", "indicator", "aside", "getRootRef"]);

  var platform = usePlatform();
  var baseClassNames = getClassName('Header', platform);
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className, "Header--mode-".concat(mode), {
      'Header--pi': typeof indicator === 'string' || typeof indicator === 'number'
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "Header__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header__content"
  }, children, subtitle && /*#__PURE__*/React.createElement("div", {
    className: "Header__subtitle"
  }, subtitle)), indicator && /*#__PURE__*/React.createElement("div", {
    className: "Header__indicator"
  }, indicator), aside && /*#__PURE__*/React.createElement("div", {
    className: "Header__aside"
  }, aside)));
};

Header.defaultProps = {
  mode: 'primary'
};
export default Header;
//# sourceMappingURL=Header.js.map