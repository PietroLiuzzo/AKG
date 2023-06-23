// console.log('BUILD MY NETWORK')

// create an array with nodes
var nodes3 = new vis.DataSet();

// create an array with edges
var edges3 = new vis.DataSet();

var updateNodesArray3 =[]
var updateEdgesArray3 =[]


function makenode3(nodeid, l, g){

if (updateNodesArray3.some(e => e.id === nodeid)) {}
        else {
        var re = new RegExp(nodeid, "g");
        var matches = document.body.innerHTML.match(re);
        var count = matches ? matches.length : 0;

        updateNodesArray3.push({
                id: nodeid,
                value : count + 1 ,
                label: l,
                group : g
            });}
        };

function parserdfa3(sel) {

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
        makenode3(resource, l, g)
        }

        if(rdfa[i].getAttribute('href')) {
        var about = rdfa[i].getAttribute('href')

        makenode3(about, about, g)
        }
        if(rdfa[i].getAttribute('src')) {
        var about = rdfa[i].getAttribute('src')

        makenode3(about, about, g)
        }
        if(rdfa[i].getAttribute('typeof')) {
        var about = rdfa[i].getAttribute('typeof')

        makenode3(about, about, g)
        }

    };



    for (var i = 0; i < rdfa.length; i++) {
        if (rdfa[i].getAttribute('about')) {
            updateEdgesArray3.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('about')
            });
        }
        if (rdfa[i].getAttribute('href')) {
            updateEdgesArray3.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('href')
            });
        }

        if (rdfa[i].getAttribute('src')) {
            updateEdgesArray3.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('src')
            });
        }
        if (rdfa[i].getAttribute('typeof')) {
            updateEdgesArray3.push({
                from: rdfa[i].getAttribute('resource'),
                label: ' is a ',
                to: rdfa[i].getAttribute('typeof')
            });
        }
    };
};


parserdfa3("[resource][property][about][data-type='source']")
parserdfa3("[resource][property][href][data-type='source']")
parserdfa3("[resource][property][src][data-type='source']")
parserdfa3("[resource][property][content][data-type='source']")
parserdfa3("[resource][typeof][data-type='source']")

// console.log(updateNodesArray3)
// console.log(updateEdgesArray3)

nodes3.update(updateNodesArray3)

edges3.update(updateEdgesArray3)

// create a network
var container3 = document.getElementById("sourcenet");

var data3 = {
    nodes: nodes3,
    edges: edges3
};

var options3 = {
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
var network3 = new vis.Network(container3, data3, options3);
