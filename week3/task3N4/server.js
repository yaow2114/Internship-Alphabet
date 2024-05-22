const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

// Function to start the server
function start(route) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    // Route the request to the appropriate handler
    route(pathname, response);
  }

  http.createServer(onRequest).listen(3000);
  console.log("Server has started.");
}

// Function to route the requests
function route(pathname, response) {
  if (pathname === "/") {
    // Serve the HTML file for the root route
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.write("Internal Server Error");
        response.end();
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  } else if (pathname === "/signup") {
    // Serve the HTML file for the root route
    const filePath = path.join(__dirname, "signup.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.write("Internal Server Error");
        response.end();
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  } else {
    // Log the pathname for other routes
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not Found");
    response.end();
  }
}

// Export the start function
exports.start = start;

// Start the server
start(route);
