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
  };
};
let mstk_pra_artefact = new mst_kruskal_demo_artefact();

function handlers(){
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
}

  mstk_pra_artefact.addedEdges=0;
  mstk_pra_artefact.check_or_add=0;
  mstk_pra_artefact.edgeNo=1;
  mstk_pra_artefact.elementCheck=0;
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

  graph.on("click", function(params) {
  if(!params['nodes']['0']&&!params['edges']['0']){return;}
  if(mstk_pra_artefact.addedEdges==graphSet[mstk_pra_artefact.graphNo][0].length-1){return;}
  if(!params['nodes']['0']){
    var edgeID = params['edges']['0'];
    if(mstk_pra_artefact.check_or_add==0 ){
      if(edgeID==ans[0][mstk_pra_artefact.edgeNo]){  
      clickededge1(edgeID);
      document.getElementById("ins").innerHTML="";
        mstk_pra_artefact.elementCheck=edgeID;
    }
      else{document.getElementById("ins").innerHTML="Wrong edge to be checked";var flag=1;}
    }
    if(mstk_pra_artefact.check_or_add==1){
  
        if(ans[0][mstk_pra_artefact.edgeNo]==ans[1][mstk_pra_artefact.edgeNo]){
        if(ans[0][mstk_pra_artefact.edgeNo]==edgeID){
          clickededge2(edgeID);
          mstk_pra_artefact.addedEdges++;
          document.getElementById("ins").innerHTML="";
        }
        else{document.getElementById("ins").innerHTML="Previous edge should be added. Select it again";mstk_pra_artefact.check_or_add--;mstk_pra_artefact.edgeNo--;}
        mstk_pra_artefact.edgeNo++;
      }
        else{
            mstk_pra_artefact.edgeNo++;
          if(edgeID==mstk_pra_artefact.elementCheck){
            document.getElementById("ins").innerHTML="No, it should not be added. Go to next edge to be checked";
      
        }
        else{
        mstk_pra_artefact.check_or_add=0;  
        if(mstk_pra_artefact.check_or_add==0 ){
      if(edgeID==ans[0][mstk_pra_artefact.edgeNo]){  
      clickededge1(edgeID);
      document.getElementById("ins").innerHTML="";
        mstk_pra_artefact.elementCheck=edgeID;
    }
      else{document.getElementById("ins").innerHTML="Wrong edge to be checked";var flag=1;}
    }     
        }
      }
        }
    if(mstk_pra_artefact.check_or_add==0)mstk_pra_artefact.check_or_add++;
    else mstk_pra_artefact.check_or_add--;
    if(flag==1)mstk_pra_artefact.check_or_add=0;
  
  }
  if(mstk_pra_artefact.addedEdges==graphSet[mstk_pra_artefact.graphNo][0].length-1){document.getElementById("ins").innerHTML="Finished MST";
    graph.setOptions({
  interaction:{
    selectable:false
  }
});
  }
  });
