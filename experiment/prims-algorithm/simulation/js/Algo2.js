var ans=[];
var abc=[];
var addd=[];
class PriorityQueue {
  constructor(maxSize) {
    // Set default max size if not provided
    if (isNaN(maxSize)) {
      maxSize = 2000;
    }
    this.maxSize = maxSize;
    // Init an array that'll contain the queue values.
    this.container = [];
  }
  // Helper function to display all values while developing
  display() {
  }
  // Checks if queue is empty
  isEmpty() {
    return this.container.length === 0;
  }
  // checks if queue is full
  isFull() {
    return this.container.length >= this.maxSize;
  }
  enqueue(data, priority) {
    // Check if Queue is full
    if (this.isFull()) {
      return;
    }
    let currElem = new this.Element(data, priority);
    let addedFlag = false;
    // Since we want to add elements to end, we'll just push them.
    for (let i = 0; i < this.container.length; i++) {
      if (currElem.priority < this.container[i].priority) {
        this.container.splice(i, 0, currElem);
        addedFlag = true; break;
      }
    }
    if (!addedFlag) {
      this.container.push(currElem);
    }
  }
  dequeue() {
    // Check if empty
    if (this.isEmpty()) {
      return;
    }
    return this.container.pop();
  }
  
  clear() {
    this.container = [];
  }
}


PriorityQueue.prototype.Element = class {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
};

class Graph {
  constructor() {
    this.edges = {};
    this.nodes = [];
  }


  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }

  kruskalsMST() {
    
    ans=[];
    ans.push([0]);ans.push([0]);  
    var nOfEdges=0;
    const MST = new Graph();
    this.nodes.forEach(node => MST.addNode(node));
    if (this.nodes.length === 0) {
      return MST;
    }
    
    var edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
    
    for (let node in this.edges) {
      this.edges[node].forEach(edge => {
        edgeQueue.enqueue([node, edge.node], edge.weight);
      });
    }
    //edgeQueue.display();    
    let uf = new UnionFind(this.nodes);
    var i=0;
    while (!edgeQueue.isEmpty() ) {
      // Get the edge data using destructuring.
      
      //  let nextEdge = edgeQueue.dequeue();
      let nextEdge=edgeQueue.dequeue();
      let nodes = nextEdge.data;
      let weight = nextEdge.priority;
      if(prevnode0!==nodes[1] || prevnode1!==nodes[0]){
        //document.getElementById("graph").innerHTML+= "<br>"+nodes[0]+" "+nodes[1]+"->"+weight;
        var prevnode0=nodes[0];var prevnode1=nodes[1];
        // Highlight the selected edge using blue
        ans[0].push(weight);;//Blue the nodes[0]->nodes[1]
        if (!uf.connected(nodes[0], nodes[1])) {
          // Highlight it with green since it should be added to MST.
          ans[1].push(weight);  
          MST.addEdge(nodes[0], nodes[1], weight);//Green the nodes[0]->nodes[1];
          uf.union(nodes[0], nodes[1]);
          nOfEdges++;
          //document.getElementById("graph").innerHTML+= "<br>"+"added"+nodes[0]+" "+nodes[1]+"->"+weight;
        }
        else{//Remove or lighten the nodes[0]->nodes[1];
          ans[1].push(0);        
        }
      }
    }
    return MST;
  }


  primsMST(a){
    abc=[];
    addd=[];
    ans=[];
    ans.push([0]);ans.push([0]);       
    const MST = new Graph();
    if (this.nodes.length === 0) {
      return MST;
    }
    let s=this.nodes[a];
    
    let edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
    let explored = new Set();
    let inMst = new Set();

    explored.add(s);
    MST.addNode(s);//Change node s to green
    inMst.add(s);
    var x=[];
    this.edges[s].forEach(edge => {
      edgeQueue.enqueue([s, edge.node], edge.weight);
      abc.push(edge.weight);
      //Endark increase pixel or change to black  the edge (s,edge.node).
    });addd.push(x);
    
    
    while (!edgeQueue.isEmpty()) {
      let currentMinEdge = edgeQueue.dequeue();
      //Highlight currentMinedge to blue to check.
      ans[0].push(currentMinEdge.priority);
      
      
      while ( explored.has(currentMinEdge.data[1])) {
        //Since its visited ignore the currentMinedge {Make it grey}.
        ans[1].push(0);
        if(edgeQueue.isEmpty()){break;}
        currentMinEdge = edgeQueue.dequeue();
        //Highlight the new currentMinEdge to blue to check.
        ans[0].push(currentMinEdge.priority);
      }
      let nextNode = currentMinEdge.data[1];
      
      
      // Check again as queue might get empty without giving back unexplored element
      if (!explored.has(nextNode)) {
        MST.addNode(nextNode);
        MST.addEdge(currentMinEdge.data[0], nextNode, currentMinEdge.priority);
        ans[1].push(currentMinEdge.priority);
        // Confirm the edge to be in MSt by making it green
        // Again add all edges to the PQ
        x=[];
        this.edges[nextNode].forEach(edge => {
          
          if(!explored.has(edge.node)){
            edgeQueue.enqueue([nextNode, edge.node], edge.weight);
            x.push(edge.weight);
            //Endark increase pixel or change to black  the edge (nextNode,edge.node).
          }
        });addd.push(x);
        
        
        // Mark this node as explored explored.add(nextNode);
        s = nextNode;
        explored.add(s);
      }
      
    }
    return MST;
  }
  
  
  display() {
    let graph = "";
    this.nodes.forEach(node => {
      graph += node + "->" + this.edges[node].map(n => n.node).join(", ") + "\n";
    });
  }
}

class UnionFind {
  constructor(elements) {
    // Number of disconnected components
    this.count = elements.length;
    
    // Keep Track of connected components
    this.parent = {};
    
    // Initialize the data structure such that all
    // elements have themselves as parents
    elements.forEach(e => (this.parent[e] = e));
  }
  
  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);
    
    // Roots are same so these are already connected.
    if (rootA === rootB) return;
    
    // Always make the element with smaller root the parent.
    if (rootA < rootB) {
      if (this.parent[b] != b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] != a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  }
  
  // Returns final parent of a node
  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }
  
  // Checks connectivity of the 2 nodes
  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}
let g = new Graph();
