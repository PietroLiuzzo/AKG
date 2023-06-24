// console.log('BUILD MY NETWORK')

// create an array with nodes
var nodes4 = new vis.DataSet();

// create an array with edges
var edges4 = new vis.DataSet();

var updateNodesArray4 =[]
var updateEdgesArray4 =[]


function makenode4(nodeid, l, g){

if (updateNodesArray4.some(e => e.id === nodeid)) {}
        else {
        var re = new RegExp(nodeid, "g");
        var matches = document.body.innerHTML.match(re);
        var count = matches ? matches.length : 0;

        updateNodesArray4.push({
                id: nodeid,
                value : count + 1 ,
                label: l,
                group : g
            });}
        };

function parserdfa4(sel) {

    var rdfa = document.querySelectorAll(sel);

    // console.log(sel)
    // console.log(rdfa)
    // console.log(rdfa.length)

    for (var i = 0; i < rdfa.length; i++) {
        var g = ''
        var l = ''

        if (rdfa[i].innerText && rdfa[i].getAttribute('about') == null && rdfa[i].getAttribute('href') == null) {

            l += rdfa[i].innerText.substring(0,30) + '...'
        } else l += rdfa[i].getAttribute('resource')

        if (rdfa[i].getAttribute('resource').includes('#obj')) {
         g += 'fotothek'
} else if (rdfa[i].getAttribute('resource').includes('#bh')) {
    g += 'fotothek'
} else if (rdfa[i].getAttribute('resource').includes('#EDR')) {
     g += 'EDR'
} else if (rdfa[i].getAttribute('resource').includes('#foto')) {
     g += 'EDR'
} else if (rdfa[i].getAttribute('resource').includes('#H')) {
    g += 'EDH'
} else if (rdfa[i].getAttribute('resource').includes('edh.ub')) {
    g += 'EDH'
} else if (rdfa[i].getAttribute('resource').includes('aat/')) {
    g += 'AAT'
} else if (rdfa[i].getAttribute('resource').includes('gn.')) {
    g += 'MIDAS'
} else if (rdfa[i].getAttribute('resource').includes('d-nb')) {
    g += 'GND'
} else if (rdfa[i].getAttribute('resource').includes('SCU')) {
    g += 'capitolini'
} else if (rdfa[i].getAttribute('resource').includes('#d')) {
    g += 'capitolini'
} else if (rdfa[i].getAttribute('resource').includes('col')) {
    g += 'capitolini'
} else if (rdfa[i].getAttribute('resource').includes('capitolini')) {
    g += 'capitolini'
} else if (rdfa[i].getAttribute('resource').includes('kbu')) {
    g += 'gordon'
} else { g += 'other'}



        if(rdfa[i].getAttribute('resource')) {
         var resource = rdfa[i].getAttribute('resource')
        makenode4(resource, l, g)
        }

        if(rdfa[i].getAttribute('typeof')) {
        var about = rdfa[i].getAttribute('typeof')

        makenode4(about, about, g)
        }

    };



    for (var i = 0; i < rdfa.length; i++) {
        if (rdfa[i].getAttribute('about')) {
            updateEdgesArray4.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('about')
            });
        }

        if (rdfa[i].getAttribute('typeof')) {
            updateEdgesArray4.push({
                from: rdfa[i].getAttribute('resource'),
                label: ' is a ',
                to: rdfa[i].getAttribute('typeof')
            });
        }
    };
};


parserdfa4("[resource][property][about][data-type='source']")
parserdfa4("[resource][typeof][data-type='source']")

// console.log(updateNodesArray4)
// console.log(updateEdgesArray4)

nodes4.update(updateNodesArray4)

edges4.update(updateEdgesArray4)

// create a network
var container4 = document.getElementById("clean");

var data4 = {
    nodes: nodes4,
    edges: edges4
};

var options4 = {
nodes: {
          font: {
            color: "#ffffff"
          },
          borderWidth: 2
        },
    interaction: {
        navigationButtons: true,
        keyboard: true
    }
};
var network4 = new vis.Network(container4, data4, options4);
