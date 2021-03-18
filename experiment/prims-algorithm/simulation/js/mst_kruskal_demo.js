class mst_kruskal_demo_artefact {
  constructor(){
    this.setTime;
    this.check_or_add=0;
    this.edgeNo=0;
    this.graphNo=0;
    this.addedEdges=0;
    this.time;
    this.paused=0;
    this.nodes;
    this.edges;
    this.container;
    this.flag_start;
  };
};
let mstk_demo_artefact = new mst_kruskal_demo_artefact();

function handlers(){
document.getElementById("startnext").onclick=function(){start();};
document.getElementById("rege").onclick=function(){regen();};
document.getElementById("pause").onclick=function(){playPause();};
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
  mstk_demo_artefact.addedEdges=0;
  
  for (i in ans[0]){
    resetedge(ans[0][i]);
  }
  mstk_demo_artefact.edgeNo=1;mstk_demo_artefact.check_or_add=0;
  flag_sn=0;
  document.getElementById("ins").innerHTML="";

  if(mstk_demo_artefact.setTime){
    clearInterval(mstk_demo_artefact.setTime);
  }

  document.getElementById("ins").innerHTML="";
  document.getElementById("startnext").innerHTML="Start";
  document.getElementById("pause").disabled=true; 
  document.getElementById("pause").style.backgroundColor='grey';
  mstk_demo_artefact.check_or_add=0;
  mstk_demo_artefact.edgeNo=1;
  mstk_demo_artefact.addedEdges=0;
  mstk_demo_artefact.paused=0;
  mstk_demo_artefact.flag_start=0;
  flag_sn=0;
  document.getElementById("pause").innerHTML="Pause";
}

  mstk_demo_artefact.check_or_add=0;
  mstk_demo_artefact.edgeNo=1;
  mstk_demo_artefact.addedEdges=0;
  mstk_demo_artefact.time=2500;
  mstk_demo_artefact.paused=0;
  mstk_demo_artefact.graphNo=getRandom();
  var nodes = new vis.DataSet (graphSet[mstk_demo_artefact.graphNo][0]);
  var edges = new vis.DataSet (graphSet[mstk_demo_artefact.graphNo][1]);
  graphs[mstk_demo_artefact.graphNo]();
  g.kruskalsMST();
  mstk_demo_artefact.container = document.getElementById('graph');
  var data = {
  nodes: nodes,
  edges: edges
  };
  var graph = new vis.Network(mstk_demo_artefact.container, data, {});

graph.setOptions({
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
    
    selectable: false,
    dragView:false,
    zoomView: false,
    selectConnectedEdges: false,
    hover: false,
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
    
    font: {background: 'white',color:"#000000"},
    width: 1.5,
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

function clickednode(nodeID){  
  if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
      border: '#2C9AD1'
    }
    nodes.update(clickedNode);
  }
}
function clickededge1(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: '#2C9AD1',
      highlight:'#2C9AD1'
    }
    clickedEdge.width = '3';
    graph.animateTraffic([
      {edge:edgeID, trafficSize:5,colorr:"#2C9AD1"},   
    ]);
    
    edges.update(clickedEdge);
  }
} 
function clickededge2(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: 'brown',
      highlight:"brown"
    }
    clickedEdge.width = '3';
    graph.animateTraffic([
      {edge:edgeID, trafficSize:5,colorr:"brown"},   
    ]);

    edges.update(clickedEdge);
  }
}
function clickededge4(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: 'grey',
      highlight:"grey"
    }
    clickedEdge.width = '3';
    graph.animateTraffic([
      {edge:edgeID, trafficSize:5,colorr:"grey"},   
    ]);

    edges.update(clickedEdge);
  }
}

document.getElementById("pause").disabled=true;
document.getElementById("pause").style.backgroundColor='grey';
function mouseOver(){
  document.getElementById("pause").style.backgroundColor='grey';
}

function mouseOut(){
  document.getElementById("pause").style.backgroundColor='#288ec8';
}

function demo(){
  mstk_demo_artefact.time=7000-(document.getElementById("myRange").value)*60;
 
  if(mstk_demo_artefact.paused==1 && flag_sn==0)return;  
  if(mstk_demo_artefact.addedEdges==nodes.length-1){
    document.getElementById("ins").innerHTML="Finished adding n-1 edges MST is formed by the edges in brown";
    return;
  }
  if(mstk_demo_artefact.check_or_add==0){
    clickededge1(ans[mstk_demo_artefact.check_or_add][mstk_demo_artefact.edgeNo]);
    document.getElementById("ins").innerHTML="Checking smallest edge among unchecked edges - "+ans[mstk_demo_artefact.check_or_add][mstk_demo_artefact.edgeNo];
  }
  if(mstk_demo_artefact.check_or_add==1){
    if(ans[0][mstk_demo_artefact.edgeNo]==ans[1][mstk_demo_artefact.edgeNo]){
      clickededge2(ans[mstk_demo_artefact.check_or_add][mstk_demo_artefact.edgeNo]);
      mstk_demo_artefact.addedEdges++;
      document.getElementById("ins").innerHTML="No circle is formed due to edge " + ans[mstk_demo_artefact.check_or_add][mstk_demo_artefact.edgeNo] + ". So edge "+ans[mstk_demo_artefact.check_or_add][mstk_demo_artefact.edgeNo]+" is added to MST";
    }
    else{
      document.getElementById("ins").innerHTML="Edge "+ans[0][mstk_demo_artefact.edgeNo]+" forms a circle , therefore it "+" is discarded from  being added to MST"; 
      clickededge4(ans[0][mstk_demo_artefact.edgeNo]);
    }
    mstk_demo_artefact.edgeNo++;
    
  }
  if(mstk_demo_artefact.check_or_add==0){mstk_demo_artefact.check_or_add=1}
  else {mstk_demo_artefact.check_or_add=0;}
  if(mstk_demo_artefact.paused==0 && flag_sn==0){
    clearInterval(mstk_demo_artefact.setTime);
    mstk_demo_artefact.setTime = setInterval(demo,mstk_demo_artefact.time);
  }
  flag_sn=0;
}

mstk_demo_artefact.flag_start=0;

function start(){

document.getElementById("pause").style.backgroundColor='#288ec8';
document.getElementById("pause").addEventListener("mouseover", mouseOver);
document.getElementById("pause").addEventListener("mouseout", mouseOut);

  document.getElementById("pause").disabled=false;
  if(mstk_demo_artefact.flag_start==0){
    mstk_demo_artefact.setTime = setInterval(demo,2500);
    document.getElementById("startnext").innerHTML="Next";
    mstk_demo_artefact.flag_start=1;
    flag_sn=0;
  }
  else{
    demo();
    flag_sn=1;
  }
}

function playPause(){
  if (mstk_demo_artefact.paused==0){mstk_demo_artefact.paused=1;document.getElementById("pause").innerHTML="Play"}
  else if(mstk_demo_artefact.paused==1){mstk_demo_artefact.paused=0;document.getElementById("pause").innerHTML="Pause";};
}
