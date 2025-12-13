### Prim's Algorithm
<iframe src="https://www.youtube.com/embed/tevwR4ljQ5g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Prim's Algorithm

Let's have a final look at the consolidated algorithm to find mst of given graph:

   - **STEP 1 :** Choose a Node and add it to MST
   - **STEP 2 :** Check all of its adjacent nodes, if they are already present in MST or not if they are not present, add edge weight to that edge into Min-Heap.
   - **STEP 3 :** Add the smallest weighted edge and its node in Min-Heap to MST. Repeat step 2 and step 3 for Node added.
   - **STEP 4 :** Repeat step 2 , step 3 for recently added node.

### Observations on Prim's

From the mentioned algorithm, we can conclude that,

   - After the T<sup>th</sup> iteration, we will have the T edges and T+1 nodes in MST.
   - Notice that after N-1 iterations, all N nodes will be in MST.
   - Look at the picture below and work out the result of each iteration.

### Iteration by Iteration Visualization of Prim's
<img src="images/primfinal.png"/>
