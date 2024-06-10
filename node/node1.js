let fs = require('fs');
let http = require('http');

// let filepath = '/home/mina/Desktop/README.txt';
let filepath = './resource.json';
fs.readFile(filepath, 'utf8', function (err, data) {
    console.log(data);
});


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');


let server = http.createServer();
server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World(1)\n');
})
server.listen(3001);
console.log('Server running at http://localhost:3001/');


var stream = fs.createReadStream('./resource.json', 'utf8');
stream.on('data', function (chunk) {
    console.log("Received chunk: " + chunk + " ///")
})
stream.on('end', function () {
    console.log('finished')
})
