"use strict";

var _server = _interopRequireDefault(require("./api/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var port = process.env.PORT || 4000;

_server["default"].listen(port, function () {
  return console.log("SCAAPI listening at http://localhost:".concat(port), process.env.MONGODB_URI);
});