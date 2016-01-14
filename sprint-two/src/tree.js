var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me **fixed
  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function (target) {
  var found = false;
  
  var lookThroughTree = function(tree) {
    if(tree.value === target) found = true;
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
