// console.log('BUILD MY NETWORK')

// create an array with nodes
var nodes9 = new vis.DataSet();

// create an array with edges
var edges9 = new vis.DataSet();

var updateNodesArray9 =[]
var updateEdgesArray9 =[]


function makenode9(nodeid, l, g){

if (updateNodesArray9.some(e => e.id === nodeid)) {}
        else {
        var re = new RegExp(nodeid, "g");
        var matches = document.body.innerHTML.match(re);
        var count = matches ? matches.length : 0;

        updateNodesArray9.push({
                id: nodeid,
                value : count + 1 ,
                label: l,
                group : g
            });}
        };

function parserdfa9(sel) {

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
        makenode9(resource, l, g)
        }

        if(rdfa[i].getAttribute('typeof')) {
        var about = rdfa[i].getAttribute('typeof')

        makenode9(about, about, g)
        }

    };



    for (var i = 0; i < rdfa.length; i++) {
        if (rdfa[i].getAttribute('about')) {
            updateEdgesArray9.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('about')
            });
        }

        if (rdfa[i].getAttribute('typeof')) {
            updateEdgesArray9.push({
                from: rdfa[i].getAttribute('resource'),
                label: ' is a ',
                to: rdfa[i].getAttribute('typeof')
            });
        }
    };
};


parserdfa9("[resource][property^='epont:'][about]")
parserdfa9("[resource][typeof^='epont:']")

parserdfa9("[resource][property^='crmtex:'][about]")
parserdfa9("[resource][typeof^='crmtex:']")



// console.log(updateNodesArray9)
// console.log(updateEdgesArray9)

nodes9.update(updateNodesArray9)

edges9.update(updateEdgesArray9)

// create a network
var container9 = document.getElementById("epont");

var data9 = {
    nodes: nodes9,
    edges: edges9
};

var options9 = {
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
var network9 = new vis.Network(container9, data9, options9);
