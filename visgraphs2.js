// console.log('BUILD MY NETWORK')

// create an array with nodes
var nodes2 = new vis.DataSet();

// create an array with edges
var edges2 = new vis.DataSet();

var updateNodesArray2 =[]
var updateEdgesArray2 =[]


function makenode2(nodeid, l){

if (updateNodesArray2.some(e => e.id === nodeid)) {}
        else {updateNodesArray2.push({
                id: nodeid,
                label: l
            });}
        };

function parserdfa2(sel) {

    var rdfa = document.querySelectorAll(sel);

   // console.log(sel)
   // console.log(rdfa)
   // console.log(rdfa.length)

    for (var i = 0; i < rdfa.length; i++) {
        var l = ''

        if (rdfa[i].innerText && rdfa[i].getAttribute('about') == null && rdfa[i].getAttribute('href') == null) {

            l += rdfa[i].innerText.substring(0,30) + '...'
        } else l += rdfa[i].getAttribute('resource')


        if(rdfa[i].getAttribute('resource')) {
         var resource = rdfa[i].getAttribute('resource')
        makenode2(resource, l)
        }

        if(rdfa[i].getAttribute('href')) {
        var about = rdfa[i].getAttribute('href')

        makenode2(about, about)
        }
        if(rdfa[i].getAttribute('src')) {
        var about = rdfa[i].getAttribute('src')

        makenode2(about, about)
        }
        if(rdfa[i].getAttribute('typeof')) {
        var about = rdfa[i].getAttribute('typeof')

        makenode2(about, about)
        }

    };



    for (var i = 0; i < rdfa.length; i++) {
        if (rdfa[i].getAttribute('about')) {
            updateEdgesArray2.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('about')
            });
        }
        if (rdfa[i].getAttribute('href')) {
            updateEdgesArray2.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('href')
            });
        }

        if (rdfa[i].getAttribute('src')) {
            updateEdgesArray2.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('src')
            });
        }
        if (rdfa[i].getAttribute('typeof')) {
            updateEdgesArray2.push({
                from: rdfa[i].getAttribute('resource'),
                label: ' is a ',
                to: rdfa[i].getAttribute('typeof')
            });
        }
    };
};


parserdfa2("[resource][property][about][data-type='akg']")
parserdfa2("[resource][property][href][data-type='akg']")
parserdfa2("[resource][property][src][data-type='akg']")
parserdfa2("[resource][property][content][data-type='akg']")
parserdfa2("[resource][typeof][data-type='akg']")

// console.log(updateNodesArray2)
// console.log(updateEdgesArray2)

nodes2.update(updateNodesArray2)

edges2.update(updateEdgesArray2)

// create a network
var container2 = document.getElementById("akgnet");

var data2 = {
    nodes: nodes2,
    edges: edges2
};

var options2 = {
    interaction: {
        navigationButtons: true,
        keyboard: true
    }
};
var network2 = new vis.Network(container2, data2, options2);
