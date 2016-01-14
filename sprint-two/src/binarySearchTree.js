var BinarySearchTree = function(value) {
  var BSTInstance = Object.create(BinarySearchTree.prototype);
  BSTInstance.value = value;
  BSTInstance.left = null;
  BSTInstance.right = null;
  return BSTInstance;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

 BinarySearchTree.prototype.insert = function (value) {
   // body...
  var newBinaryTree = new BinarySearchTree(value);
  if(value < this.value) { //look left
    if(this.left === null) this.left = newBinaryTree;
    else this.left.insert(value);
  } else { //lookright
    if(this.right === null) this.right = newBinaryTree;
    else this.right.insert(value);
  }
 };
BinarySearchTree.prototype.contains = function (value) {
  // body...
  var found = false;
  var searchTree = function(BST) {
    if (BST.value === value) found = true;
    else { // looking left
      if (BST.left !== null) searchTree(BST.left);
      if (BST.right !== null) searchTree(BST.right);
    }
  };
  searchTree(this);
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  // body...
};