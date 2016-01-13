var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.queueSize = 0;
  queueInstance.storage = {};
  return queueInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.queueSize++] = value;
  },
  dequeue: function () {
    var result = this.storage[0];
    _.each(this.storage, function(value, key, collection) {
      collection[parseInt(key) - 1] = value;
    });
    delete this.storage[-1];
    delete this.storage[--this.queueSize];
    if(this.queueSize < 0) this.queueSize = 0;
    return result;
  },
  size: function() {
    return  this.queueSize;
  }
};


