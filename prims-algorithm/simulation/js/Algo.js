var ans=[];
var abc=[];
var addd=[];
class PriorityQueue {
  constructor(maxSize) {
    if (isNaN(maxSize)) {
      maxSize = 2000;
    }
    this.maxSize = maxSize;
    this.container = [];
  }
  display() {
  }
  isEmpty() {
    return this.container.length === 0;
  }
  isFull() {
    return this.container.length >= this.maxSize;
  }
  enqueue(data, priority) {
    if (this.isFull()) {
      return;
    }
    let currElem = new this.Element(data, priority);
    let addedFlag = false;
    for (let i = 0; i < this.container.length; i++) {
      if (currElem.priority > this.container[i].priority) {
        this.container.splice(i, 0, currElem);
        addedFlag = true; break;
      }
    }
    if (!addedFlag) {
      this.container.push(currElem);
    }
  }
  dequeue() {
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
    let uf = new UnionFind(this.nodes);
    var i=0;
    while (!edgeQueue.isEmpty() ) {
      let nextEdge=edgeQueue.dequeue();
      let nodes = nextEdge.data;
      let weight = nextEdge.priority;
      if(prevnode0!==nodes[1] || prevnode1!==nodes[0]){
        var prevnode0=nodes[0];var prevnode1=nodes[1];
        ans[0].push(weight);
        //Blue the nodes[0]->nodes[1]
        if (!uf.connected(nodes[0], nodes[1])) {
          ans[1].push(weight);  
          MST.addEdge(nodes[0], nodes[1], weight);
         //Green the nodes[0]->nodes[1];
          uf.union(nodes[0], nodes[1]);
          nOfEdges++;
        }
        else{
          //Remove or lighten the nodes[0]->nodes[1];
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
    MST.addNode(s);
    inMst.add(s);
    var x=[];
    this.edges[s].forEach(edge => {
      edgeQueue.enqueue([s, edge.node], edge.weight);
      abc.push(edge.weight);
    });addd.push(x);
    
    
    while (!edgeQueue.isEmpty()) {
      let currentMinEdge = edgeQueue.dequeue();
      ans[0].push(currentMinEdge.priority);

      while ( explored.has(currentMinEdge.data[1])) {
        
        ans[1].push(0);
        if(edgeQueue.isEmpty()){break;}
        currentMinEdge = edgeQueue.dequeue();
        ans[0].push(currentMinEdge.priority);
      }
      let nextNode = currentMinEdge.data[1];
      
      
      if (!explored.has(nextNode)) {
        MST.addNode(nextNode);
        MST.addEdge(currentMinEdge.data[0], nextNode, currentMinEdge.priority);
        ans[1].push(currentMinEdge.priority);
        x=[];
        this.edges[nextNode].forEach(edge => {
          
          if(!explored.has(edge.node)){
            edgeQueue.enqueue([nextNode, edge.node], edge.weight);
            x.push(edge.weight);
          }
        });addd.push(x);
        
        
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
    this.count = elements.length;
    
    this.parent = {};
    
    elements.forEach(e => (this.parent[e] = e));
  }
  
  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);
    
    if (rootA === rootB) return;
    
    if (rootA < rootB) {
      if (this.parent[b] != b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] != a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  }
  
  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }
  
  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}
let g = new Graph();
