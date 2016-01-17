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
    newPT.parent = this;
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
      newPT.parent = this;
      this.children.push(newPT);
    }    
  }
};

PrefixTree.prototype.navigate = function(str) {

  var matchingChild = this.children.find(function (childPT) {
    return childPT.value === str[0];
  });
  if(matchingChild !== undefined) {
    if(str.length === 1 ) return matchingChild;
    else return matchingChild.navigate(str.slice(1));
  } else {
    return false;
  }
};

PrefixTree.prototype.autocomplete = function(str) {
  var results = [];
  var possib = this.navigate(str);
  if(!possib) {
    return str;
  }
  var navigateDown = function(prefT, resultStr) {
    if(prefT.children.length === 0) results.push(resultStr);
    else {
      _.each(prefT.children, function(tree){
        navigateDown(tree, resultStr + tree.value);
      });
    }
  };
  navigateDown(possib, str);
  return results;
};






