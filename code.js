function convertToAdjList(adjMatrix) {
    let adjList = []

    for (let i = 0; i < adjMatrix.length; i++) {
        let neighbors = [];
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] !== 0) {
                neighbors.push(j);
            }
        }
        adjList.push(neighbors);
    }

    return adjList;
}

// bonus
function convertToAdjMatrix(adjList) {
    let n = adjList.length;
    let adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        let neighbors = adjList[i];
        for (let j = 0; j < neighbors.length; j++) {
            let neighbor = neighbors[j];
            adjMatrix[i][neighbor] = 1;
        }
    }

    return adjMatrix;
}

/*
const adjList = [
    [1],
    [2],
    [0, 3],
    []
];

const adjMatrix = convertToAdjMatrix(adjList);
console.log(adjMatrix);
*/
