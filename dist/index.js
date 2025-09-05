"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "ProfileProvider", {
  enumerable: true,
  get: function get() {
    return _ProfileProvider.ProfileProvider;
  }
});
Object.defineProperty(exports, "db", {
  enumerable: true,
  get: function get() {
    return _db["default"];
  }
});
Object.defineProperty(exports, "useProfiles", {
  enumerable: true,
  get: function get() {
    return _ProfileProvider.useProfiles;
  }
});
var _Footer = _interopRequireDefault(require("./Footer/Footer"));
var _db = _interopRequireDefault(require("./db/db"));
var _ProfileProvider = require("./ProfileProvider/ProfileProvider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }