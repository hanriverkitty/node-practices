var http = require("http");

var port = 9090;
var server = http.createServer(function (req, resp) {
  resp.writeHead(200, {
    "Content-Type": "text/html",
  });
  resp.end("<h1>Hello World</h1>");
});

server.listen(9090, function () {
  console.log("server: starts....[" + port + "]");
});
