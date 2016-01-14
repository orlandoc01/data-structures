var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if(this.tail === null) {
      this.tail = newNode;
      this.head.next = this.tail;
      this.tail.previous = this.head;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  };

  list.addToHead = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if(this.tail === null) {
      this.tail.previous = newNode;
      this.head = newNode;
      this.head.next = this.tail;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

  };

  list.removeHead = function() {
    var result = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return result;
  };

  list.removeTail = function() {
    var result = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = null;
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