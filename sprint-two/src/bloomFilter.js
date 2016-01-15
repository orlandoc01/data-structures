function BloomFilter (m) {
  this.m = m;
  this.storage = Array(m);

}

BloomFilter.prototype.check = function(value) {
  var index1 = hash1(value) % this.m;
  var index2 = hash2(value) % this.m;
  var index3 = hash3(value) % this.m;

  return index1 && index2 && index3;
};

BloomFilter.prototype.store = function(value) {
  var getIndices = function(hashFunctions, value) {
    _.map(hashFunctions, function (fn) {
      return fn(value) % this.m;
    });
  };
  var indices = getIndices([hash1, hash2, hash3], value);
  _.each(indices, function(index) {
    this.storage[index] = true;
  });
};


var hash3 = function (value) {
  
    // body...
};

var hash2 = function (value) {
    // body...
};

var hash1 = function (value) {
    // body...
};