var graphs = [
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addEdge("d", "c", 12);
    g.addEdge("d", "b", 8);
    g.addEdge("a", "c", 13);
    g.addEdge("a", "e", 15);
    g.addEdge("d", "e", 16);
    g.addEdge("c", "b", 11);
    g.addEdge("e", "b", 10);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addEdge("d", "c", 12);
    g.addEdge("d", "b", 8);
    g.addEdge("a", "c", 13);
    g.addEdge("c", "b", 11);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addEdge("d", "b", 8);
    g.addEdge("a", "c", 13);
    g.addEdge("a", "e", 15);
    g.addEdge("d", "e", 16);
    g.addEdge("c", "b", 11);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addEdge("a", "b", 8);
    g.addEdge("b", "c", 10);
    g.addEdge("c", "d", 11);
    g.addEdge("d", "e", 12);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addEdge("d", "b", 8);
    g.addEdge("a", "c", 13);
    g.addEdge("a", "e", 15);
    g.addEdge("d", "e", 16);
    g.addEdge("c", "b", 11);
    g.addEdge("c", "d", 12);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addNode("f");
    g.addEdge("d", "c", 12);
    g.addEdge("d", "b", 8);
    g.addEdge("a", "c", 13);
    g.addEdge("a", "e", 15);
    g.addEdge("d", "e", 16);
    g.addEdge("c", "b", 11);
    g.addEdge("e", "f", 10);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addEdge("a", "c", 12);
    g.addEdge("a", "b", 8);
    g.addEdge("b", "d", 9);
    g.addEdge("c", "d", 11);
    g.addEdge("a", "d", 10);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addEdge("a", "c", 12);
    g.addEdge("a", "b", 8);
    g.addEdge("b", "d", 9);
    g.addEdge("c", "d", 11);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addNode("f");
    g.addEdge("a", "c", 12);
    g.addEdge("a", "b", 8);
    g.addEdge("b", "d", 9);
    g.addEdge("c", "d", 11);
    g.addEdge("a", "d", 10);
    g.addEdge("a", "e", 14);
    g.addEdge("b", "f", 19);
  },
  function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addNode("f");
    g.addEdge("a", "b", 1);
    g.addEdge("c", "b", 2);
    g.addEdge("b", "d", 3);
    g.addEdge("c", "d", 4);
    g.addEdge("e", "d", 6);
    g.addEdge("a", "e", 5);
    g.addEdge("a", "f", 8);
    g.addEdge("e", "f", 7);
  },  
];

var graphSet=[
  [[
    {id: 1, label: ' a', size:125},
    {id: 2, label: ' b'},
    {id: 3, label: ' c'},
    {id: 4, label: ' d'},
    {id: 5, label: ' e'},
  ],
   [     
     {from: 2, to: 4, label:"8", id: "8"},
     {from: 2, to: 5, label:"10", id: "10"},
     {from: 2, to: 3, label:"11", id: "11"},
     {from: 3, to: 4, label:"12", id: "12"},
     {from: 3, to: 1, label:"13", id: "13"},
     {from: 1, to: 5, label:"15", id: "15"},
     {from: 4, to: 5, label:"16", id: "16"},
   ]
  ],
  [[
    {id: 1, label: ' a', size:125},
    {id: 2, label: ' b'},
    {id: 3, label: ' c'},
    {id: 4, label: ' d'},
  ],
   [     
     {from: 2, to: 4, label:"8", id: "8"},
     {from: 2, to: 3, label:"11", id: "11"},
     {from: 3, to: 4, label:"12", id: "12"},
     {from: 3, to: 1, label:"13", id: "13"},
   ]
  ],
  [[
    {id: 1, label: ' a', size:125},
    {id: 2, label: ' b'},
    {id: 3, label: ' c'},
    {id: 4, label: ' d'},
    {id: 5, label: ' e'},
  ],
   [     
     {from: 2, to: 4, label:"8", id: "8"},
     {from: 2, to: 3, label:"11", id: "11"},
     {from: 3, to: 1, label:"13", id: "13"},
     {from: 1, to: 5, label:"15", id: "15"},
     {from: 4, to: 5, label:"16", id: "16"},
   ]
  ],
  [[
    {id: 1, label: ' a', size:125},
    {id: 2, label: ' b'},
    {id: 3, label: ' c'},
    {id: 4, label: ' d'},
    {id: 5, label: ' e'},
  ],
   [     
     {from: 1, to: 2, label:"8", id: "8"},
     {from: 2, to: 3, label:"10", id: "10"},
     {from: 3, to: 4, label:"11", id: "11"},
     {from: 4, to: 5, label:"12", id: "12"},
   ]
  ],
  [[
    {id: 1, label: ' a', size:125},
    {id: 2, label: ' b'},
    {id: 3, label: ' c'},
    {id: 4, label: ' d'},
    {id: 5, label: ' e'},
  ],
   [     
     {from: 2, to: 4, label:"8", id: "8"},
     {from: 2, to: 3, label:"11", id: "11"},
     {from: 3, to: 4, label:"12", id: "12"},
     {from: 3, to: 1, label:"13", id: "13"},
     {from: 1, to: 5, label:"15", id: "15"},
     {from: 4, to: 5, label:"16", id: "16"},
   ]
  ],
  [
    [
      {id: 1, label: ' a', size:125},
      {id: 2, label: ' b'},
      {id: 3, label: ' c'},
      {id: 4, label: ' d'},
      {id: 5, label: ' e'},
      {id: 6, label: ' f'},
    ],
    [
      {from: 2, to: 4, label:"8", id: "8"},
      {from: 6, to: 5, label:"10", id: "10"},
      {from: 2, to: 3, label:"11", id: "11"},
      {from: 3, to: 4, label:"12", id: "12"},
      {from: 3, to: 1, label:"13", id: "13"},
      {from: 1, to: 5, label:"15", id: "15"},
      {from: 4, to: 5, label:"16", id: "16"},
    ]
  ],
  [
    [
      {id: 1, label: ' a', size:125},
      {id: 2, label: ' b'},
      {id: 3, label: ' c'},
      {id: 4, label: ' d'},
    ],
    [      
      {from: 2, to: 1, label:"8", id: "8"},
      {from: 2, to: 4, label:"9", id: "9"},
      {from: 3, to: 4, label:"11", id: "11"},
      {from: 1, to: 3, label:"12", id: "12"},
      {from: 1, to: 4, label:"10", id: "10"},
    ]
  ],
  [
    [
      {id: 1, label: ' a', size:125},
      {id: 2, label: ' b'},
      {id: 3, label: ' c'},
      {id: 4, label: ' d'},
    ],
    [      
      {from: 2, to: 1, label:"8", id: "8"},
      {from: 2, to: 4, label:"9", id: "9"},
      {from: 3, to: 4, label:"11", id: "11"},
      {from: 1, to: 3, label:"12", id: "12"},
    ]
  ],
  [
    [
      {id: 1, label: ' a', size:125},
      {id: 2, label: ' b'},
      {id: 3, label: ' c'},
      {id: 4, label: ' d'},
      {id: 5, label: ' e'},
      {id: 6, label: ' f'},      
    ],
    [
      {from: 2, to: 1, label:"8", id: "8"},
      {from: 2, to: 4, label:"9", id: "9"},
      {from: 3, to: 4, label:"11", id: "11"},
      {from: 1, to: 3, label:"12", id: "12"},
      {from: 1, to: 4, label:"10", id: "10"},
      {from: 1, to: 5, label:"14", id: "14"},
      {from: 2, to: 6, label:"19", id: "19"},      
    ]
  ],
  [
    [
      {id: 1, label: ' a', size:125},
      {id: 2, label: ' b'},
      {id: 3, label: ' c'},
      {id: 4, label: ' d'},
      {id: 5, label: ' e'},
      {id: 6, label: ' f'},
      
    ],
    [
      {from: 2, to: 1, label:"1", id: "1"},
      {from: 2, to: 3, label:"2", id: "2"},
      {from: 3, to: 4, label:"4", id: "4"},
      {from: 2, to: 4, label:"3", id: "3"},
      {from: 5, to: 4, label:"6", id: "6"},
      {from: 1, to: 5, label:"5", id: "5"},
      {from: 5, to: 6, label:"7", id: "7"},
      {from: 1, to: 6, label:"8", id: "8"},      
    ]
  ],  
]; 

function getRandom(){
  var min=0; 
  var max=10;  
  var random =Math.floor(Math.random() * (+max - +min)) + +min; 
  return random;
}
