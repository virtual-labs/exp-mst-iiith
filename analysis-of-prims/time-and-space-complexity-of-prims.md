### Running Time of Prim's Algorithm

Lets assume that we are given **V** vertices and **E** edges in a graph for which we need to find an MST.

   - To complete one iteration, we delete min node from Min-Heap and add some no.of edge weights to Min-Heap.
   - In total we delete **V** nodes from Min-Heap since we have **V** nodes in graph and in every iteration **1** edge and in total **V-1** edges in MST are deleted and each deletion takes complexity of **O(log(V))**. And we add atmost **E** edges altogether where each adding takes complexity of **O(log(V))**.
   - So, totally complexity id **O((V+E)Log(V))**.

### Best and Worst Cases for Prim's

   - Best case time complexity of Prim's is when the given graph is a tree itself and each node has minimum number of adjacent nodes.
   - Worst case time complexity would be when its a graph with **V<sup>2</sup>** edges.

### Space Complexity of Prim's

   - We need an array to know if a node is in MST or not. Space **O(V)**.
   - We need an array to maintain Min-Heap. Space **O(E)**.
   - So, Total space complexity is of order **O(V+E)**.


