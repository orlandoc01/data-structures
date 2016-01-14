var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else if(this.tail == null) {
      this.tail = newNode;
      this.head.next = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  
    
  };

  list.removeHead = function() {
    
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
