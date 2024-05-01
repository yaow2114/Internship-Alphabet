var http = require('http');
var fs = require('fs')

// 404 response
function send404Response(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

// handle a user request
function onRequest (request, response) {
    console.log("A user made a request" + request.url);

    if (request.method == "GET" && request.url == '/play') {
        response.writeHead(200, { "Content-Type": "audio/mpeg" });
        fs.createReadStream("./music.mp3").pipe(response);
    } else if(request.method == "GET" && request.url == "/") {
        response.writeHead(200, { "Context-Type": "text/plain" });
        response.write("Welcome to YouTube Music!");
        response.end();
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8080);
console.log("Server is now running on port 8080");