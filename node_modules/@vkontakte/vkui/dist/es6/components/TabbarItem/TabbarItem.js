import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var TabbarItem = function TabbarItem(props) {
  var className = props.className,
      children = props.children,
      selected = props.selected,
      label = props.label,
      text = props.text,
      restProps = _objectWithoutProperties(props, ["className", "children", "selected", "label", "text"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(getClassName('TabbarItem', platform), className, {
      'TabbarItem--selected': selected
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "TabbarItem__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "TabbarItem__icon"
  }, children, label && /*#__PURE__*/React.createElement("span", {
    className: "TabbarItem__label"
  }, label)), text && /*#__PURE__*/React.createElement("div", {
    className: "TabbarItem__text"
  }, text)));
};

export default TabbarItem;
//# sourceMappingURL=TabbarItem.js.map