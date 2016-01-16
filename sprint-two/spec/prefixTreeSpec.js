describe('prefixTree', function() {
  var prefixTree;
  var words;

  beforeEach(function() {
    prefixTree = new PrefixTree();
    words = ["team", "teach", "teal", "tear", "touch",
            "double", "basket", "trouble", "toil", "orlando",
            "case", "base","race", "shade", "autocomplete"];
    _.each(words, function (word) {
      prefixTree.insert(word);
    });
  });


  it('should insert values at the correct location in the tree', function(){
    
    expect(prefixTree.children[0].value).to.equal('t');
    expect(prefixTree.children[0].children[1].value).to.equal('o');

  });

  it('should autocomplete with already inserted words when given a query string', function(){
    
     expect(prefixTree.autocomplete('tea')).to.eql(["team", "teach", "teal", "tear"]);
     //expect(binarySearchTree.contains(8)).to.equal(false);
  });

  // it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
  //   var array = [];
  //   var func = function(value){ array.push(value); };
  //   binarySearchTree.insert(2);
  //   binarySearchTree.insert(3);
  //   binarySearchTree.depthFirstLog(func);
  //   expect(array).to.eql([5,2,3]);
  // });
});
