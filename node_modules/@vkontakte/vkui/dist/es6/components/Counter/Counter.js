import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
var baseClassName = getClassName('Counter');

var Counter = function Counter(props) {
  var mode = props.mode,
      size = props.size,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(baseClassName, "Counter--".concat(mode), "Counter--s-".concat(size))
  }, /*#__PURE__*/React.createElement("div", {
    className: "Counter__in"
  }, children));
};

Counter.defaultProps = {
  mode: 'secondary',
  size: 'm'
};
export default React.memo(Counter);
//# sourceMappingURL=Counter.js.map