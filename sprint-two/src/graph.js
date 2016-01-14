

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.include(this.vertices[fromNode], toNode);

  
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices[fromNode].push(toNode);
  this.vertices[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.vertices[fromNode] = _.filter(this.vertices[fromNode], function (edge) {
    return edge !== toNode;
  });
  this.vertices[toNode] = _.filter(this.vertices[toNode], function (edge) {
    return edge !== fromNode;
  });
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


