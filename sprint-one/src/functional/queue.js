var Queue = function() {
  var someInstance = {};
  var queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize++] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[0];
    _.each(storage, function (value, key, collection) {
      collection[parseInt(key) -1] = value;
    });
    delete storage["-1"];
    delete storage[--queueSize];
    queueSize = queueSize < 0 ? 0 : queueSize;
    return result;
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
