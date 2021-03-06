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

 BinarySearchTree.prototype.insert = function (value, rebalancing) {
  
  if(this.value === undefined) {
    this.value = value;
    return;
  }


  var newBinaryTree = BinarySearchTree(value);
  if(value < this.value) { //look left
    if(this.left === null) this.left = newBinaryTree;
    else this.left.insert(value);
  } else { //lookright
    if(this.right === null) this.right = newBinaryTree;
    else this.right.insert(value);
  }
  
  if(!rebalancing) {
    var maxDepth = this.getMaxDepth();
    var minDepth = this.getMinDepth();
    if(maxDepth / minDepth > 2) {
      this.rebalance();

    }
  }



};

BinarySearchTree.prototype.contains = function (value) {
  // body...
  var found = false;
  var searchTree = function(BST) {
    if (BST.value === value) {
      found = true;
    }
    else { // looking left
      if (BST.left !== null) {
        searchTree(BST.left);
      }
      if (BST.right !== null) {
        searchTree(BST.right);
      }
    }
  };
  searchTree(this);
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  

  // body...
};





BinarySearchTree.prototype.breadthFirstLog = function (cb) {
  var levelNodes = {};
  var searchTree = function(BST, level) {
    if(levelNodes[level] === undefined) {
      levelNodes[level]  = [];
    }
    levelNodes[level].push(BST.value);
    if(BST.left !== null) {
      searchTree(BST.left, level + 1);
    }
    if(BST.right !== null) {
      searchTree(BST.right, level + 1);
    }
  };
  searchTree(this, 0);
  _.each(levelNodes, function(ArrayValues, level, coll) {
    _.each(ArrayValues, function(value) {
      cb(value);
    });
  });

};

BinarySearchTree.prototype.getMinDepth = function () {
  var getMinDepthOfTree = function(tree) {
    if (tree === null) {
      return 0;
    }
    else {
      return 1 + Math.min(getMinDepthOfTree(tree.left), getMinDepthOfTree(tree.right));
    }
  };
  var result = getMinDepthOfTree(this);
  return result;
};


BinarySearchTree.prototype.getMaxDepth = function() {
  var getMaxDepthOfTree = function(tree) {
    if(tree === null) {
      return 0;
    }
    else {
      return 1 + Math.max(getMaxDepthOfTree(tree.left), getMaxDepthOfTree(tree.right));
    }
  };
  var result = getMaxDepthOfTree(this);
  return result;
};

BinarySearchTree.prototype.rebalance = function() {
    var sortedValues = [];
    var pushSortedValues = function(tree) {
      if(tree.left !== null){
        pushSortedValues(tree.left);
      }
      sortedValues.push(tree.value);
      if(tree.right !==null){
        pushSortedValues(tree.right);
      }
    };
    pushSortedValues(this);


    this.value = undefined;
    this.left = null;
    this.right = null;
    var thiz = this;
    var makeNewTree = function (arr) {
      if (arr.length === 0) return;
      else if (arr.length === 1) thiz.insert(arr[0], true);
      else {
        var mid = Math.floor(arr.length/2);
        thiz.insert(arr[mid], true);
        var lesser = arr.slice(0,mid);
        var greater  = arr.slice(mid+1, arr.length);
        makeNewTree(lesser);
        makeNewTree(greater);
      }
    };
    makeNewTree(sortedValues);
};
