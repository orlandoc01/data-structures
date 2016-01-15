var PrefixTree = function (value) {
  this.value = value || "";
  this.children = [];
  this.parent = null;
};


PrefixTree.prototype.insert = function (str) {
  var newPT;
  if(str === '') {
    return;
  } else if(this.children.length === 0) {
    newPT = new PrefixTree(str[0]);
    newPT.insert(str.slice(1, str.length));
    this.children.push(newPT);
  } else {
    var matchingChild = this.children.find(function (childPT) {
      return childPT.value === str[0];
    });
    if(matchingChild !== undefined) {
      matchingChild.insert(str.slice(1, str.length));
    } else {
      newPT = new PrefixTree(str[0]);
      newPT.insert(str.slice(1, str.length));
      this.children.push(newPT);
    }    
  }
};








