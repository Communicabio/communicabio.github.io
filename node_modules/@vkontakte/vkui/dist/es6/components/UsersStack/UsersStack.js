import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { createMasks } from './masks';
createMasks();

var UsersStack = function UsersStack(props) {
  var platform = usePlatform();

  var className = props.className,
      photos = props.photos,
      visibleCount = props.visibleCount,
      size = props.size,
      layout = props.layout,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["className", "photos", "visibleCount", "size", "layout", "children"]);

  var othersCount = Math.max(0, photos.length - visibleCount);
  var canShowOthers = othersCount > 0 && size === 'm';
  var photosShown = photos.slice(0, visibleCount);
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(getClassName('UsersStack', platform), className, "UsersStack--size-".concat(size), "UsersStack--l-".concat(layout), {
      'UsersStack--with-others': canShowOthers
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "UsersStack__photos"
  }, photosShown.map(function (photo, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "UsersStack__photo",
      style: {
        backgroundImage: "url(".concat(photo, ")")
      }
    });
  }), canShowOthers && /*#__PURE__*/React.createElement("div", {
    className: "UsersStack__photo UsersStack__photo--others"
  }, "+".concat(othersCount))), children && /*#__PURE__*/React.createElement("div", {
    className: "UsersStack__text"
  }, children));
};

UsersStack.defaultProps = {
  photos: [],
  size: 's',
  visibleCount: 3,
  layout: 'horizontal'
};
export default React.memo(UsersStack);
//# sourceMappingURL=UsersStack.js.map