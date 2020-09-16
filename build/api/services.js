'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.connectToDatabase = connectToDatabase

var _url = require('url')
var regeneratorRuntime = require('regenerator-runtime')
var _mongodb = require('mongodb')

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg)
    var value = info.value
  } catch (error) {
    reject(error)
    return
  }
  if (info.done) {
    resolve(value)
  } else {
    Promise.resolve(value).then(_next, _throw)
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args)
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
      }
      _next(undefined)
    })
  }
}

function connectToDatabase(_x) {
  return _connectToDatabase.apply(this, arguments)
}

function _connectToDatabase() {
  _connectToDatabase = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(uri) {
      var client, db
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2
              return _mongodb.MongoClient.connect(uri, {
                useNewUrlParser: true,
              })['catch'](function (error) {
                return console.log('error while connecting to MongoDB', error)
              })

            case 2:
              client = _context.sent
              // Select the database through the connection,
              // using the database path of the connection string
              db = client.db((0, _url.parse)(uri).pathname.substr(1)) // Cache the database connection and return the connection

              return _context.abrupt('return', db)

            case 5:
            case 'end':
              return _context.stop()
          }
        }
      }, _callee)
    })
  )
  return _connectToDatabase.apply(this, arguments)
}
