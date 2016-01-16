describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.value).to.equal(3); //changed because tree now rebalances itself
    expect(binarySearchTree.right.left.value).to.equal(5); //tree rebalances
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([3,2,5]); //edited because tree now rebalances itself
  });

  it('should rebalance and ensure max depth is never more than twice the minimum depth', function() {
    var array = [0,1,2,3,4,5,6,7,8];
    _.each(array, function (item) {
      binarySearchTree.insert(item);
    });
    expect((binarySearchTree.getMaxDepth()/binarySearchTree.getMinDepth())).be.at.most(2);

  });

});
