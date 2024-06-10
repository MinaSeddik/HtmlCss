import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import mime from 'mime';

import * as chatServer from './lib/chat_server.js';


let cache = {};


function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}

function sendFile(response, filePath, fileContents) {
    response.writeHead(
        200,
        {"content-type": mime.getType(path.basename(filePath))}
    );
    response.end(fileContents);
}

function serveStatic(response, cache, absPath) {
    if (cache[absPath]) {
        sendFile(response, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, function(exists) {
            if (exists) {
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);
                    }
                });
            } else {
                send404(response);
            }
        });
    }
}

const server = http.createServer(function(request, response) {
    let filePath = false;
    if (request.url === '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public' + request.url;
    }
    let absPath = './' + filePath;
    serveStatic(response, cache, absPath);
});
server.listen(3000, function() {
    console.log("The HTTP Web Server is listening on port 3000 -> http://localhost:3000/");
});

chatServer.listen(server);
