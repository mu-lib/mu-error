define([ "../factory" ], function (Factory) {
  "use strict";

  var assert = buster.referee.assert;

  buster.testCase("mu-error/factory", {

    "instanceof Error": function () {
      var E = Factory("name");

      assert.exception(function () {
        throw new E("message")
      }, function (e) {
        return (e instanceof Error);
      });
    },

    "instanceof E": function () {
      var E = Factory("name");

      assert.exception(function () {
        throw new E("message")
      }, function (e) {
        return (e instanceof E);
      });
    },

    "has a name property": function () {
      var E = Factory("name");

      assert.exception(function () {
        throw new E("message")
      }, {
        "name": "name"
      });
    },

    "has a message property": function () {
      var E = Factory("name");

      assert.exception(function () {
        throw new E("message")
      }, {
        "message": "message"
      });
    }
  });
});