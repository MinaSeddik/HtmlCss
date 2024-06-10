import http from "http";
import path from 'path';
import qs from 'querystring';
import { parse, fileURLToPath } from 'url';
import * as https from "node:https";

// static file server’s root directory
// let root = __dirname;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const root = __dirname;
console.log(__filename)
console.log(__dirname)
console.log(root)



let options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./key-cert.pem')
};
https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(3002);




let server = http.createServer(function (req, res) {
    // handle request
    let body = 'Hello World';
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/plain');
    res.end(body);


    let url2 = 'http://google.com';
    body = '<p>Redirecting to <a href="' + url2 + '">'
        + url + '</a></p>';
    res.setHeader('Location', url);
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 302;
    res.end(body);


    // when new data chunk (packet) arrived
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        console.log('parsed', chunk);
    });

    // when everything has been read.
    req.on('end', function(){
        console.log('done parsing');
        res.end()
    });

    let items = [];
    switch (req.method) {
        case 'GET':
            items.forEach(function(item, i){
                res.write(i + ') ' + item + '\n');
            });
            res.end();

            // OR
            body = items.map(function(item, i){
                return i + ') ' + item;
            }).join('\n');
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
            res.end(body);

            break;
        case 'POST':
            let item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk){
                item += chunk;
            });
            req.on('end', function(){
                items.push(item);
                res.end('OK\n');
            });
            break;
        case 'DELETE':
            // let path = url.parse(req.url).pathname;
            let path = parse(req.url).pathname;
            let path2 = path.join(root, url.pathname);
            let i = parseInt(path.slice(1), 10);
            if (isNaN(i)) {
                res.statusCode = 400;
                res.end('Invalid item id');
            } else if (!items[i]) {
                res.statusCode = 404;
                res.end('Item not found');
            } else {
                items.splice(i, 1);
                res.end('OK\n');
            }
            break;
    }


});
server.listen(3000);
