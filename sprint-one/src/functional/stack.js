var Stack = function() {
  var someInstance = {};
  var stackSize = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize++] = value;
  };

  someInstance.pop = function() {
    var result = storage[--stackSize];
    if(stackSize < 0) stackSize = 0;
    return result;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
