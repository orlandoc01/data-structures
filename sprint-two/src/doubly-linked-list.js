var doublyLinkedList = function() {
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
    var result = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return result;
  };

  list.contains = function(target) {
    var found = false;
    var examinedNode = this.head;
    while(examinedNode !== null){
      if (examinedNode.value === target) {
        found = true;
        break;
      }
      examinedNode = examinedNode.next;
    }


    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};