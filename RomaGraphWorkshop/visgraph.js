
function makenode(nodeid, l){

if (updateNodesArray.some(e => e.id === nodeid)) {}
        else {updateNodesArray.push({
                id: nodeid,
                label: l
            });}
        };

function parserdfa(sel) {
    
    var rdfa = document.querySelectorAll(sel);
    
    console.log(sel)
    console.log(rdfa)
    console.log(rdfa.length)
    
    for (var i = 0; i < rdfa.length; i++) {
        var l = ''
        
        if (rdfa[i].innerText && rdfa[i].getAttribute('about') == null && rdfa[i].getAttribute('href') == null) {
            
            l += rdfa[i].innerText.substring(0,30) + '...'
        } else l += rdfa[i].getAttribute('resource')
        
       
        if(rdfa[i].getAttribute('resource')) {
         var resource = rdfa[i].getAttribute('resource')
        makenode(resource, l)
        }
       
        if(rdfa[i].getAttribute('href')) {
        var about = rdfa[i].getAttribute('href')
        
        makenode(about, about)
        }
        if(rdfa[i].getAttribute('src')) {
        var about = rdfa[i].getAttribute('src')
        
        makenode(about, about)
        }
        if(rdfa[i].getAttribute('typeof')) {
        var about = rdfa[i].getAttribute('typeof')
        
        makenode(about, about)
        }
        
    };
    
    
    
    for (var i = 0; i < rdfa.length; i++) {
        if (rdfa[i].getAttribute('about')) {
            updateEdgesArray.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('about')
            });
        }
        if (rdfa[i].getAttribute('href')) {
            updateEdgesArray.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('href')
            });
        }
        
        if (rdfa[i].getAttribute('src')) {
            updateEdgesArray.push({
                from: rdfa[i].getAttribute('resource'),
                label: rdfa[i].getAttribute('property'),
                to: rdfa[i].getAttribute('src')
            });
        }
        if (rdfa[i].getAttribute('typeof')) {
            updateEdgesArray.push({
                from: rdfa[i].getAttribute('resource'),
                label: ' is a ',
                to: rdfa[i].getAttribute('typeof')
            });
        }
    };
};
