"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _services = require("./services");

var router = (0, _express.Router)();
router.get('/', function (req, res, next) {
  console.log(process.env.MONGODB_URI);
  (0, _services.connectToDatabase)(process.env.MONGODB_URI).then(function (db) {
    return db.collection('Tags');
  })["catch"](function (error) {
    return console.log('Error finding collection Tags:', error);
  }).then(function (collection) {
    return collection.find({}).toArray();
  })["catch"](function (error) {
    return console.log('Error finding object in collection:', error);
  }).then(function (tags) {
    return res.json(tags);
  })["catch"](function (error) {
    return console.log('Error while responding:', error);
  });
});
var _default = router;
exports["default"] = _default;