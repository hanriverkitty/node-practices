var http = require("http");
var fs = require("fs");

var port = 9090;
var server = http.createServer(function (req, resp) {
  console.log(req.url);
  if (req.url === "/") {
    req.url = "/index.html";
  }

  fs.readFile(__dirname + "/public" + req.url, function (error, data) {
    resp.writeHead(200, {
      "Content-Type": "text/html",
    });
    resp.end(data);
  });
});

server.listen(9090, function () {
  console.log("server: starts....[" + port + "]");
});
