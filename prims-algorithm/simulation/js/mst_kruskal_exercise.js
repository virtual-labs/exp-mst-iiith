class mst_kruskal_demo_artefact {
  constructor(){
    this.setTime;
    this.check_or_add=0;
    this.edgeNo=0;
    this.addedEdges=0;
    this.time;
    this.paused=0;
    this.graphNo;
    this.nodes;
    this.edges;
    this.container;
    this.flag_start;
    this.elementCheck;
    this.finalAnswer;
    this.toCheck;
  };
};
let mstk_pra_artefact = new mst_kruskal_demo_artefact();

function handlers(){
document.getElementById("subm").onclick=function(){submit();};
document.getElementById("rege").onclick=function(){regen();};
document.getElementById("res").onclick=function(){reset();};
}

function main_functions()
{ 
  
  handlers();
};
document.body.onload = function() {main_functions();}
function resetedge(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: '#000000',
      highlight:'#000000',
      highlightwidth: 0
    };
    clickedEdge.width=2.0;
    clickedEdge.selectionWidth=0;
    edges.update(clickedEdge);
  }
}

function regen(){
  location.reload();
}

function reset(){
  for (i in ans[0]){
    resetedge(ans[0][i]);
  }
  mstk_pra_artefact.edgeNo=1;mstk_pra_artefact.check_or_add=0;
  mstk_pra_artefact.addedEdges=0;
  document.getElementById("ins").innerHTML="";
  graph.setOptions({
    interaction:{
      selectable:true
    }
  });
  selected=[];
  mstk_pra_artefact.toCheck=[];
}


  mstk_pra_artefact.graphNo=getRandom();
  var nodes = new vis.DataSet (graphSet[mstk_pra_artefact.graphNo][0]);
  var edges = new vis.DataSet (graphSet[mstk_pra_artefact.graphNo][1]);
  graphs[mstk_pra_artefact.graphNo]();
  g.kruskalsMST();
  mstk_pra_artefact.container = document.getElementById('graph');
  var data = {
  nodes: nodes,
  edges: edges
  };
  var graph = new vis.Network(mstk_pra_artefact.container, data, {});  
graph.setOptions
(
  {
    clickToUse:true,
    nodes:{
      fixed:false,
      borderWidth: 2,
      borderWidthSelected: 1,
      chosen: false,
      color: {
        border: "#2C9AD1",
        background: "#ffffff",
        highlight: {
          border: "#2C9AD1",
          background: "#ffffff",
          
        },
        hover: {
          border: "#2C9AD1",
          background: "#ffffff",
          
        }
      },
      shape:'circle',
      scaling:{
        label:{
          enabled:true,
          min:25,
          max:25
        }
      },
      value:1
    },
    
    interaction: {
      dragView:false,
      zoomView: false,
      selectConnectedEdges: false,
      hover: true,
      hoverConnectedEdges: false,
      keyboard: {
        enabled: true,
        bindToWindow:true
      },
      navigationButtons: true,
      zoomView: false
      
    },
    physics: {enabled: false,
              stabilization:false},
    edges:{
      scaling:{
        min:1,
        max:5,
        label:{
          enabled:true,
          min:20,
          max:20
        }
      },
      value:1,
      
      selectionWidth: 0,
      font: {background: 'white',color:"#000000"},
      width: 5,
      labelHighlightBold: false,
      color : {
        inherit: false,
        color: "#000000",
        opacity: 1.0      
      },
      chosen : {
        inherit: false
      },
      
      arrows: {
        to:     {enabled: false, scaleFactor:1, type:'arrow'},
        middle: {enabled: false, scaleFactor:1, type:'arrow'},
        from:   {enabled: false, scaleFactor:1, type:'arrow'}
        
      },
      chosen:{
        
      },
      physics: false
    }}
  
);


var networkCanvas = document.getElementById("graph").getElementsByTagName("canvas")[0]
function changeCursor(newCursorStyle){
  networkCanvas.style.cursor = newCursorStyle;
}
function changeEventCursor(eventName,cursorType){ 
  graph.on(eventName, function() {
    changeCursor(cursorType);
  });
}
graph.on('hoverNode', function () {
  changeCursor('default');
});
graph.on('blurNode', function () {
  changeCursor('default');
});
graph.on('hoverEdge', function () {
  changeCursor('pointer');
});
graph.on('blurEdge', function () {
  changeCursor('default');
});
graph.on('dragStart', function () {
  changeCursor('grabbing');
});
graph.on('dragging', function () {
  changeCursor('grabbing');
});
graph.on('dragEnd', function () {
  changeCursor('grab');
});

function clickednode(nodeID){  
  if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    
    clickedNode.color = {
      border: '#B22222'
    }
    nodes.update(clickedNode);
  }
}

function clickededge1(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: '#0000FF',
      highlight:'#0000FF',
      hover:'#0000FF'
    }
    edges.update(clickedEdge);
  }
}

function clickededge2(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: 'brown',
      highlight:"brown",
      hover:"brown"
    }
    clickedEdge.width = '1.5';
    edges.update(clickedEdge);
  }
}

mstk_pra_artefact.toCheck=[];
var selected=[];
mstk_pra_artefact.finalAnswer=[];
for(i in ans[1]){if(i!=0 && ans[1][i]!=0)mstk_pra_artefact.finalAnswer.push(ans[1][i]);}



function find(final,val){
  for(i in final){
    
    if(final[i]==val)
      return true;
  }
  return false;
}
function submit()
{
  
  if(selected.length!=graphSet[mstk_pra_artefact.graphNo][0].length-1){
    document.getElementById("ins").innerHTML="Spanning tree contains n-1 edges. So, selected MST is incorrect.";
    return;
  }
  else{
    for (i in selected){
      if(!find(mstk_pra_artefact.finalAnswer,selected[i])){
        document.getElementById("ins").innerHTML="Incorrect graph selected.";
        return;
      }}
  }
  
  document.getElementById("ins").innerHTML="Selected spanning tree is correct.";
  for (i in selected){if(mstk_pra_artefact.finalAnswer[i]!=(selected[i])){
    document.getElementById("ins").innerHTML+=" But order selected is incorrect.";
    
    return;
  }
  }
  
}
graph.on("click", function(params) {
  if(!params['nodes']['0']&&!params['edges']['0']){return;}
  
  if(!params['nodes']['0']){
    if(!find(mstk_pra_artefact.toCheck,params['edges']['0'])){clickededge1(params['edges']['0']);mstk_pra_artefact.toCheck.push(params['edges']['0']);}
    else{clickededge2(params['edges']['0']);
         
         if(!find(selected,params['edges']['0'])){selected.push(params['edges']['0']);}
        }
  }
});
