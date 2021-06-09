var fs = require('fs'); 
var parser = require('./gramaticaXPath');


fs.readFile('./entrada2.txt', (err, data) => {
    if (err) throw err;
    t =parser.parse(data.toString());
   // console.log(t);
    //console.log(t.padre);
    //console.log(t.padre.children[0]);
});