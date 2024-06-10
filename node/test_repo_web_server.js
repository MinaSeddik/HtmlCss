import http from "http";
import * as myService from './lib/data_service.js'

const myserver = http.createServer(function(request, response) {

    if (request.url === '/') {
        myService.doIt();
        response.end('Repo Called ....');
    }

    if (request.url === '/get') {
        let result = myService.getIt();
        response.end('Repo value so far: ' + result);
    }

});
myserver.listen(4000, function() {
    console.log("The HTTP Web Server is listening on port 4000 -> http://localhost:4000/");
});

