var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.queueSize = 0;
  queueInstance.storage = {};
};

var queueMethods = {
  enqueue: function () {},
  dequeue: function () {},
  size: function() {}
};


