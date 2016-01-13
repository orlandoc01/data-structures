var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.pop = function () {
  var result = this.storage[--this.stackSize];
  if(this.stackSize < 0) this.stackSize = 0;
  delete this.storage[this.stackSize];
  return result;
};

Stack.prototype.push = function (value) {
  this.storage[this.stackSize++]  =  value;
};

Stack.prototype.size = function () {
  return this.stackSize;
};

