// console.log('BUILD MY NETWORK')

// create an array with nodes
var nodes = new vis.DataSet();

// create an array with edges
var edges = new vis.DataSet();

var updateNodesArray =[]
var updateEdgesArray =[]

parserdfa("[resource][property][about]")
parserdfa("[resource][property][href]")
parserdfa("[resource][property][src]")
parserdfa("[resource][property][content]")
parserdfa("[resource][typeof]")

console.log(updateNodesArray)
console.log(updateEdgesArray)

nodes.update(updateNodesArray)

edges.update(updateEdgesArray)

// create a network
var container = document.getElementById("mynetwork");

var data = {
    nodes: nodes,
    edges: edges,
};

var options = {
    interaction: {
        navigationButtons: true,
        keyboard: true,
    },
};
var network = new vis.Network(container, data, options);