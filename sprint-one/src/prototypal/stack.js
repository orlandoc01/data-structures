var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.stackSize = 0;
  stackInstance.storage = {};

  return stackInstance;
};

var stackMethods = {
  push : function (value) {
    // body...
  },
  pop : function () {
    // body...
  },
  size : function () {
    // body...
  }
};


