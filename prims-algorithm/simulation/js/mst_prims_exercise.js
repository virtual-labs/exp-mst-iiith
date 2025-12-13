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
  addedEdges=0;
  flag_1=0;
  for (i in ans[0]){
    resetedge(ans[0][i]);
  }
  edge_No=1;check_or_add=0;
  document.getElementById("ins").innerHTML="";
  graph.setOptions({
    interaction:{
      selectable:true
    }
  });
  lim=[];
  blu=[];
  brown=[];
  finalAnswer=[];
}

  var addedEdges=0;
  var check_or_add=0;
  var edge_No=1;
  var now=0;
  var noww=0;
  var flag_1=0;
  var graphNo=getRandom();
  var nodes = new vis.DataSet (graphSet[graphNo][0]);
  var edges = new vis.DataSet (graphSet[graphNo][1]);
  graphs[graphNo]();
  var container = document.getElementById('graph');
  var data = {
  nodes: nodes,
  edges: edges
  };
  var graph = new vis.Network(container, data, {});  
graph.setOptions({
  clickToUse:true,
  nodes:{
    fixed:false,
    borderWidth: 2,
    borderWidthSelected: 0,
    chosen:false,
    
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
      max:3,
      label:{
        enabled:true,
        min:20,
        max:20
      }
    },
    value:1,
    
    selectionWidth: 0,
    font: {background: 'white',color:"#000000"},
    width: 2,
    labelHighlightBold: false,
    color : {
      inherit: false,
      color: "#000000",
      opacity: 2.0      
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
      color: '#00008b',
      highlight:'#00008b',
      hover:'#00008b'
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

function clickededge3(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: '#83F52C',
      highlight: "#83F52C",
      hover: "#83F52C"
    }
    clickedEdge.width = 1.5;
    edges.update(clickedEdge);
  }
}

function clickededge4(edgeID){
  if(edgeID){
    var clickedEdge = edgeID;
    clickedEdge.color = {
      color: '#83F52C',
      highlight: "#83F52C",
      hover: "#83F52C"
    }
    clickedEdge.width = 1.5;
    edges.update(clickedEdge);
  }
}
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

var lim=[];
var blu=[];
var brown=[];
var finalAnswer=[];
function submit()
{
  if(brown.length!=graphSet[graphNo][0].length-1){
    document.getElementById("ins").innerHTML="Spanning tree contains n-1 edges. So, selected MST is incorrect";
    return;
  }
  else{
    for (i in brown){
      if(!find(finalAnswer,brown[i])){
        document.getElementById("ins").innerHTML="Incorrect graph selected.";
        return;
      }}
  }
  
  document.getElementById("ins").innerHTML="Selected spanning tree is correct.";
  for (i in brown){if(finalAnswer[i]!=(brown[i])){
    document.getElementById("ins").innerHTML+=" But order selected is incorrect.";
    
    return;
  }
  }  
}

function getEdgesOfNode(nodeId) {
  return edges.get().filter(function (edge) {
    return edge.from === nodeId || edge.to === nodeId;
  });
}
function find(final,val){
  for(i in final){
    if(final[i]==val)
      return true;
  }
  return false;
}
graph.on("click", function(params) {
  if(params['nodes']['0'] && flag_1==0){
    g.primsMST(params['nodes']['0']-1);

    for(i in ans[1]){if(i!=0 && ans[1][i]!=0)finalAnswer.push(ans[1][i]);}


    var k;
    for (k in abc){
      clickededge3(abc[k]);
      lim.push(abc[k]);
    }
    flag_1=1;
  }
  if(!params['edges']['0'] && !params['nodes']['0']){return;}
  if(flag_1==0){alert("Select node to start with");return;}
  var nodeID = params['nodes']['0'];


  if(!params['nodes']['0']){
    var edgee=params['edges']['0'];
    if(!find(lim,edgee))return;
    if(!find(blu,edgee)){clickededge1(edgee);blu.push(edgee);return;}
    if(!find(brown,edgee)){
      clickededge2(edgee);
      brown.push(edgee);
      var clickedEdge = edges.get(edgee);
      var from=clickedEdge.from;
      var to=clickedEdge.to;
      var fromEdges=getEdgesOfNode(from);
      for (edgge in fromEdges){
        if(!find(lim,fromEdges[edgge].id))
          clickededge4(fromEdges[edgge]);
        lim.push(fromEdges[edgge].id);
      }     
      fromEdges=getEdgesOfNode(to);
      for (edgge in fromEdges){
        if(!find(lim,fromEdges[edgge].id))
          clickededge4(fromEdges[edgge]);
        lim.push(fromEdges[edgge].id);
      }     
    }

  }
});
