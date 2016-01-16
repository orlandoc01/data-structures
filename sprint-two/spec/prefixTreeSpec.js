describe('prefixTree', function() {
  var prefixTree;
  var words;

  beforeEach(function() {
    prefixTree = new PrefixTree();
    words = ["team", "teach", "teal", "tear", "touch",
            "double", "basket", "trouble", "toil", "orlando",
            "case", "base","race", "shade", "autocomplete"];
  });


  it('should insert values at the correct location in the tree', function(){
    _.each(words, function (word) {
      prefixTree.insert(word);
    });
    
    expect(prefixTree.children[0].value).to.equal('t');
    expect(prefixTree.children[0].children[1]).to.equal('o');

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
    expect(array).to.eql([5,2,3]);
  });
});
