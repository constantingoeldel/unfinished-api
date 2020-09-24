"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _projects = _interopRequireDefault(require("./projects"));

var _tags = _interopRequireDefault(require("./tags"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
server.use((0, _cors["default"])());
server.use(_express["default"].json());
server.use(_express["default"].urlencoded({
  extended: true
}));
server.use('/api/projects', _projects["default"]);
server.use('/api/tags', _tags["default"]);
server.get('/', function (req, res) {
  res.send('This api is connected to the unfinished project');
});
var _default = server;
exports["default"] = _default;