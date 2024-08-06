### Running Time of Kruskal's
Lets assume that we are finding MST of a **N** vertices graph using Kruskal's.

   - To check edges we need to sort the given edges based on weights of edges. The best way to sort has a order of **O(N log(N))**.
   - To Check one edge if it needs to be in MST or not, we apply Union-find to check if it forms a circle with edges present and add to MST **exactly once** and apply Union-Find algorithm of order **log(E)**.
   - Since we perform atmost **N** checks for a graph total complexity is **O(Nlog(E))** for the checkings.
   - So, total complexity is **O(Nlog(E)+Nlog(N))**

### Best and Worst Cases for Kruskal's
For regular Kruskal's, time complexity will be **O(Nlog(E)+Nlog(N))** in all cases. For Kruskal's :

   - In best case scenario, we have **N** no cycles and we have to run **N-1** iterations to determine MST.
   - Time complexity will be **O((N-1)*log(E)+Elog(E))** in this case.
   - In worst case we will have to check all E edges . Time complexity in such case would be **O(Elog(E)+Nlog(N))**

Try out the demo below and look out for the number of checkings performed for different types of graphs!

### Space Complexity of Kruskal's

While sorting, we need an extra array to store sorted array of edges (Space comlexity of **O(E)**), Another array for Union-Find of size **O(E)**. So, total Space Complexity would be **O(log(E))**.

