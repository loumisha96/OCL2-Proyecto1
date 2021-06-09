var fs = require('fs'); 
var parser = require('../gramaticaXPath');


fs.readFile('./XPATH/entrada2.txt', (err, data) => {
    if (err) throw err;
    t =parser.parse(data.toString());
    console.log(t.reporte)
    console.log(t.tree.children);
    
});