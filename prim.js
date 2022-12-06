let V = 5;

function minKey(key, mstSet)
{
	// Initialize min value
	let min = Number.MAX_VALUE, min_index;

	for (let v = 0; v < V; v++)
		if (mstSet[v] == false && key[v] < min)
			min = key[v], min_index = v;

	return min_index;
}

function printMST(parent, graph)
{
	document.write("Edge 	 Weight" + "<br>");
	for (let i = 1; i < V; i++)
		document.write(parent[i] + "  - " + i + "  " + graph[i][parent[i]] + "<br>");
}

function primMST(graph)
{
	// Array to store constructed MST
	let parent = [];
	
	// Key values used to pick minimum weight edge in cut
	let key = [];
	
	// To represent set of vertices included in MST
	let mstSet = [];

	// Initialize all keys as INFINITE
	for (let i = 0; i < V; i++)
		key[i] = Number.MAX_VALUE, mstSet[i] = false;

	
	key[0] = 0;
	parent[0] = -1; // First node is always root of MST

	// The MST will have V vertices
	for (let count = 0; count < V - 1; count++)
	{
		
		let u = minKey(key, mstSet);

		// Add the picked vertex to the MST Set
		mstSet[u] = true;

		for (let v = 0; v < V; v++)

			if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v])
				parent[v] = u, key[v] = graph[u][v];
	}

	// print the constructed MST
	printMST(parent, graph);
}

let graph = [ [ 0, 2, 0, 6, 0 ],
[ 2, 0, 3, 8, 5 ],
[ 0, 3, 0, 0, 7 ],
[ 6, 8, 0, 0, 9 ],
[ 0, 5, 7, 9, 0 ] ];

// Print the solution
primMST(graph);