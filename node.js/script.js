console.log("Processing.argv");


let args = process.argv;

for(let i = 2; i < args.length; i++) {
    console.log( "hello to", args[i]);
}




//require for the  module.exports ---------------------
const somevalue = require("./math");
console.log(somevalue);



// for external directories --------------

let fruits = require("../fruits");


