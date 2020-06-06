"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassname;

var _platform = require("../lib/platform");

function getClassname(base) {
  var osname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _platform.platform)();
  return "".concat(base, " ").concat(base, "--").concat(osname);
}
//# sourceMappingURL=getClassName.js.map