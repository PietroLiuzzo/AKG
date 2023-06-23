// console.log('BUILD MY NETWORK')

// create an array with nodes
var nodes10 = new vis.DataSet();

// create an array with edges
var edges10 = new vis.DataSet();

var updateNodesArray10 =[]
var updateEdgesArray10 =[]


function makenode10(nodeid, l, g){

if (updateNodesArray10.some(e => e.id === nodeid)) {}
        else {
        var re = new RegExp(nodeid, "g");
        var matches = document.body.innerHTML.match(re);
        var count = matches ? matches.length : 0;

        updateNodesArray10.push({
                id: nodeid,
                value : count + 1 ,
                label: l,
                group : g
            });}
        };

function parserdfa10(sel) {

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
        makenode10(resource, l, g)
        }

        if(rdfa[i].getAttribute('typeof')) {
        var about = rdfa[i].getAttribute('typeof')

        makenode10(about, about, g)
        }

    };



    for (var i = 0; i < rdfa.length; i++) {
        if (rdfa[i].getAttribute('about')) {
            updateEdgesArray10.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('about')
            });
        }

        if (rdfa[i].getAttribute('typeof')) {
            updateEdgesArray10.push({
                from: rdfa[i].getAttribute('resource'),
                label: ' is a ',
                to: rdfa[i].getAttribute('typeof')
            });
        }
    };
};


parserdfa10("[resource][property^='bibo:'][about]")
parserdfa10("[resource][typeof^='bibo:']")

parserdfa10("[resource][property^='sdc:'][about]")
parserdfa10("[resource][typeof^='sdc:']")


parserdfa10("[resource][property^='epont:'][about]")
parserdfa10("[resource][typeof^='epont:']")

parserdfa10("[resource][property^='crmtex:'][about]")
parserdfa10("[resource][typeof^='crmtex:']")

parserdfa10("[resource][property^='crm:'][about]")
parserdfa10("[resource][typeof^='crm:']")

// console.log(updateNodesArray10)
// console.log(updateEdgesArray10)

nodes10.update(updateNodesArray10)

edges10.update(updateEdgesArray10)

// create a network
var container10 = document.getElementById("semantical");

var data10 = {
    nodes: nodes10,
    edges: edges10
};

var options10 = {
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
var network10 = new vis.Network(container10, data10, options10);
