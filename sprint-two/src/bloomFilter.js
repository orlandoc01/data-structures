function BloomFilter (m) {
  this.m = m;
  this.storage = new Array(m);

}

BloomFilter.prototype.check = function(value) {
  var index1 = this.hash1(value) % this.m;
  var index2 = this.hash2(value) % this.m;
  var index3 = this.hash3(value) % this.m;

  return !!(this.storage[index1] && this.storage[index2] && this.storage[index3]);
};

BloomFilter.prototype.store = function(value) {
  var thiz = this;
  var getIndices = function(hashFunctions, value) {
    return _.map(hashFunctions, function (fn) {
      return fn(value) % thiz.m;
    });
  };
  var indices = getIndices([this.hash1, this.hash2, this.hash3], value);
  _.each(indices, function(index) {
    thiz.storage[index] = true;
  });
};


BloomFilter.prototype.hash3 = function (value) {
  value = JSON.stringify(value);
  var hash = 1;
  for(var i = 0; i < value.length; i++) {
    hash = hash * value.charCodeAt(i);
  }
  return hash;
};

BloomFilter.prototype.hash2 = function (value) {
  value = JSON.stringify(value);
  var hash = 42;
  for(var i = 0; i < value.length; i++){
    hash = ((value.charCodeAt(i)* 3) + value.charCodeAt(i));
  }
  return hash;
    // body...  
};

BloomFilter.prototype.hash1 = function (value) {
  value = JSON.stringify(value);
    // body...
  var hash = 6;
  for(var i = 0; i< value.length ; i++){
    hash = (hash << value.charCodeAt(i)) + i;
  }
  if (hash < 0 ) hash = ~hash;
  return hash;
};

