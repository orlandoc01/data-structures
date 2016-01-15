var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me **fixed
  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);

};

treeMethods.removeFromParent = function () {
  var that = this;
  var newChildren = _.filter(this.parent.children, function (childTree) {
    return childTree.value !== that.value;      
  });
  this.parent.children = newChildren;
  this.parent = null;
};

treeMethods.contains = function (target) {
  var found = false;
  
  var lookThroughTree = function(tree) {
    if(tree.value === target) {
      found = true;
    }
    else {
      if(tree.children.length !== 0) {
        _.each(tree.children, function(tree) {
          lookThroughTree(tree);
        });
      }
    }
  };
  lookThroughTree(this);

  return found;
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  if(this.children !== null) {
    _.each(this.children, (child) => child.traverse(cb));
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
