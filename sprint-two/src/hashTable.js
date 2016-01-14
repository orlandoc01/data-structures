

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._used = 0;
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket === undefined) bucket = [];
  bucket.push([k,v]);
  this._storage.set(index, bucket);
  this.used++;
  if (this._used / this._limit >= 0.75){
    // increase size
  } 
};



HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value;
  _.each(bucket, function (pairs, index, collection) {
    if(pairs[0] === k) value = pairs[1];
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(keyValuePair, hashIndex, collection) {
    if(hashIndex === index) collection.splice(index,1);
  });
  if(--this._used < 0) this._used = 0;
  if (this._used / this._limit <= 0.25){
    // decrease size
  }  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


