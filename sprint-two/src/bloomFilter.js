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
  value = JSON.stringify(value);
  var hash = 1;
  for(var i = 0; i < value.length; i++) {
    hash = hash * value.charCodeAt(i);
  }
  return hash;
};

var hash2 = function (value) {
  value = JSON.stringify(value);
  var hash = 42;
  for(var i = 0; i < value.length; i = i+2){
    hash = Math.floor(value.charCodeAt(i)/2) + value.charCodeAt(i+1);
  }
  return hash;
    // body...  
};

var hash1 = function (value) {
  value = JSON.stringify(value);
    // body...
  var hash = 6;
  for(var i = 0; i< value.length ; i++){
    hash = (hash << value.charCodeAt(i)) + i;
  }
  if (hash < 0 ) hash = ~hash;
  return hash;
};

