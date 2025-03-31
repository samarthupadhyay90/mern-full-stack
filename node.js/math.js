
// // 1st way to print the code of the exports files in REPL--------------

// let sum =(a , b) => a + b;
// let mul = (a , b) => a * b;
// let g = 9.8;
// let PI = 3.14;


// const newobj = {
//     sum: sum,
//     mul:mul,
//     g: g,
//     PI: PI

// }
// module.exports = newobj;


// 2nd way for the print the code of the exports file in the REPL------------------

// module.exports.sum =(a , b) => a + b;
// module.exports.mul = (a , b) => a * b;
// module.exports.g= 9.8;
// module.exports.PI = 3.;


// the import of the module in the REPL-------------------------

export const sum = (a , b) => a + b;
export const mul = (a , b) => a * b;
export const g = 9.8;
export const PI = 3.14;