# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

# Solution

For converting a matrix to a list, I used a nested for loop. Both for loops iterate over the entire length of the array and the subarrays. These are both linear operations, so we have a complexity of $O(n\cdot n) = O(n^2)$. I also use push but that is a constant O(1), so it is negligible. This complexity only depends on the number of verticies, because we iterate over each possible edge even if its empty/null.

# Bonus Solution

Similar to the matrix to list, my implementation of a list to matrix converter uses a nested for loop. Both loops iterate over the entire length of the array and the subarrays. Both are linear, meaning we get $O(n^2)$. Iterating over the list takes O(n+m) where n is the # of verticies and m is the # of edges. That means our total runtime turns into $O(n^2+n+m)$, which simplifies to $O(n^2)$. The non-simplified version does depend on edges as well as verticies. If the graph is sparse, the complexity would be especially dependent on edges. But asymptotically it only really depends on the number of verticies.

# Disclaimer

I watched [this](https://www.youtube.com/watch?v=EQsZJCsNOSc) for better understanding the adjacency lists and matricies.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
