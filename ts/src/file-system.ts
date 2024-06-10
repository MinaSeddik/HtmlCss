// declare function require(name:string);
let fs = require('fs');


let filepath: string = '/home/mina/Desktop/README.txt';
fs.readFile(filepath, 'utf8', (err, data) =>
    console.log(data));
