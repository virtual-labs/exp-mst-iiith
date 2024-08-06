class mst_kruskal_demo_artefact {
  constructor(){
    this.setTime;
    this.check_or_add=0;
    this.edgeNo=0;
    this.addedEdges=0;
    this.time;
    this.speed;
    this.paused=0;
    this.graphNo=0;
    this.nodes;
    this.edges;
    this.container;
    this.flag_start;
    this.elementCheck;
    this.addFlag;
    this.setSpeed;
  };
};
let mstp_demo_artefact = new mst_kruskal_demo_artefact();

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
  mstp_demo_artefact.addedEdges=0;
  for (i in ans[0]){
    resetedge(ans[0][i]);
  }
  mstp_demo_artefact.edgeNo=1;mstp_demo_artefact.check_or_add=0;
  g.primsMST(1);
  flag_1=0;
  mstp_demo_artefact.addFlag=0;

  mstp_demo_artefact.check_or_add=0;
  mstp_demo_artefact.edgeNo=1;
  mstp_demo_artefact.addedEdges=0;
  mstp_demo_artefact.addFlag=0;
  mstp_demo_artefact.paused=0;
  flag_1=0;
  flag_start=0;
  flag_sn=0;
  clearInterval(mstp_demo_artefact.setSpeed);
  document.getElementById("startnext").innerHTML="Start";
  document.getElementById("pause").disabled=true; 
  document.getElementById("pause").style.backgroundColor='grey';
  
  document.getElementById("pause").innerHTML="Pause";
  document.getElementById("ins").innerHTML="";  
}

mstp_demo_artefact.check_or_add=0;
mstp_demo_artefact.edgeNo=1;
mstp_demo_artefact.addedEdges=0;
mstp_demo_artefact.addFlag=0;
mstp_demo_artefact.speed=2500;
mstp_demo_artefact.paused=0;
var flag_1=0;
mstp_demo_artefact.setSpeed;
var flag_start=0;
   mstp_demo_artefact.graphNo=getRandom();
   var nodes = new vis.DataSet (graphSet[mstp_demo_artefact.graphNo][0]);
   var edges = new vis.DataSet (graphSet[mstp_demo_artefact.graphNo][1]);
   graphs[mstp_demo_artefact.graphNo]();
   mstp_demo_artefact.container = document.getElementById('graph');
   var data = {
     nodes: nodes,
     edges: edges
   };
   var graph = new vis.Network(mstp_demo_artefact.container, data, {});
   g.primsMST(1);
  
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
    
    selectable: true,
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
      max:3,
      label:{
        enabled:true,
        min:20,
        max:20
      }
    },
    value:1,
    
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
      border: '#2C9AD1'
    }
    nodes.update(clickedNode);
  }
}

function clickededge1(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: 'darkblue',
      highlight:'darkblue'
    }
    clickedEdge.width = '3';
    graph.animateTraffic([
      {edge:edgeID, trafficSize:5,colorr:"darkblue"},   
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

function clickededge3(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: '#83F52C',
      highlight: "#83F52C"
    }
    clickedEdge.width = 1.5;
    graph.animateTraffic([
      {edge:edgeID, trafficSize:5,colorr:"#83F52C",isBackward:true},   
    ]);
    edges.update(clickedEdge);
  }
}

function clickededge4(edgeID){
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: 'grey',
      highlight: "grey"
    }
    clickedEdge.width = 1.5;
    graph.animateTraffic([
      {edge:edgeID, trafficSize:5,colorr:"grey",isBackward:true},   
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
  mstp_demo_artefact.speed=6000-(document.getElementById("myRange").value)*60;
  if(mstp_demo_artefact.paused==1 && flag_sn==0){return};
  flag_sn=0;  
  if(mstp_demo_artefact.addedEdges==nodes.length-1){
    document.getElementById("ins").innerHTML="Finished adding n-1 edges so the edges in green form an  MST";
    return;
  }
  if(mstp_demo_artefact.addFlag==1){
    document.getElementById("ins").innerHTML="Adding edges from recently node of recently added edge"
    
    for (ki in addd[mstp_demo_artefact.edgeNo]){clickededge3(addd[mstp_demo_artefact.edgeNo][ki]);}
    mstp_demo_artefact.addFlag=0;mstp_demo_artefact.edgeNo++;
    if(mstp_demo_artefact.check_or_add==0){mstp_demo_artefact.check_or_add=1}
    else {mstp_demo_artefact.check_or_add=0;}
    return;
  }
  if(flag_1==0){
    document.getElementById("ins").innerHTML="Starting from node 'b' edges from the node are added to edges to be checked";
    var k;
    for (k in abc){
      
      clickededge3(abc[k]);
    }
    flag_1=1;
    return;
  }
  if(mstp_demo_artefact.check_or_add==0){
    clickededge1(ans[mstp_demo_artefact.check_or_add][mstp_demo_artefact.edgeNo]);
    document.getElementById("ins").innerHTML="Checking smallest edge in edges to be checked (edges in lime) that is "+ans[mstp_demo_artefact.check_or_add][mstp_demo_artefact.edgeNo];
  }
  else if(mstp_demo_artefact.check_or_add==1){
  
    if(ans[0][mstp_demo_artefact.edgeNo]==ans[1][mstp_demo_artefact.edgeNo]){
      clickededge2(ans[mstp_demo_artefact.check_or_add][mstp_demo_artefact.edgeNo]);
      mstp_demo_artefact.addedEdges++;
      document.getElementById("ins").innerHTML="A node of edge "+ans[mstp_demo_artefact.check_or_add][mstp_demo_artefact.edgeNo]+ " isn't in MST. So , it "+" is added to MST";
      var k;
      mstp_demo_artefact.addFlag=1;mstp_demo_artefact.edgeNo--;
    }
    else{
      document.getElementById("ins").innerHTML="Nodes of edge " +ans[0][mstp_demo_artefact.edgeNo]+ " are already in MST So, it "+" is omitted from abeing added to MST";
      clickededge4(ans[0][mstp_demo_artefact.edgeNo]);     
    }
    mstp_demo_artefact.edgeNo++;
    
  }
  if(mstp_demo_artefact.addFlag==0){
    if(mstp_demo_artefact.check_or_add==0){mstp_demo_artefact.check_or_add=1}
    else {mstp_demo_artefact.check_or_add=0;}}
  if(mstp_demo_artefact.paused==0 ){
    clearInterval(mstp_demo_artefact.setSpeed);
    mstp_demo_artefact.setSpeed = setInterval(demo,mstp_demo_artefact.speed);
  }
}

flag_start=0;
function start(){
document.getElementById("pause").disabled=false;
document.getElementById("pause").style.backgroundColor='#288ec8';
document.getElementById("pause").addEventListener("mouseover", mouseOver);
document.getElementById("pause").addEventListener("mouseout", mouseOut);


  if(flag_start==0){
    mstp_demo_artefact.setSpeed = setInterval(demo,2500);
    document.getElementById("startnext").innerHTML="Next";
    flag_start=1;
    flag_sn=0;
  }
  else{
    demo();
    flag_sn=1;
  }
}

function playPause(){
  if (mstp_demo_artefact.paused==0){mstp_demo_artefact.paused=1;document.getElementById("pause").innerHTML="Play"}
  else if(mstp_demo_artefact.paused==1){mstp_demo_artefact.paused=0;document.getElementById("pause").innerHTML="Pause";};
}
