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
    newPT.insert(str.slice(1));
    this.children.push(newPT);
  } else {
    var matchingChild = this.children.find(function (childPT) {
      return childPT.value === str[0];
    });
    if(matchingChild !== undefined) {
      matchingChild.insert(str.slice(1));
    } else {
      newPT = new PrefixTree(str[0]);
      newPT.insert(str.slice(1));
      this.children.push(newPT);
    }    
  }
};

PrefixTree.prototype.navigate = function(str) {
  if(str.length === 1 && str[0] === this.value) {
    return this;
  } else {
    var matchingChild = this.children.find(function (childPT) {
      return childPT.value === str[0];
    });
    if(matchingChild !== undefined) {
      if(str.length === 1 ) return matchingChild.navigate(str);
      else return matchingChild.navigate(str.slice(1));
    } else {
      return false;
    }
  }
};








