'use strict'
var fs = require("fs");

fs.readFile('package.json', function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
})
fs.readFile('packag.json', function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
})