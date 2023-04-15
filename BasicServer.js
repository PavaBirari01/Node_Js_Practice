//this is the basic creation of server.
const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("<h1>Pavan is here</h1>,<h2>Server is up and running</h2>");
    resp.end();
  })
  .listen(4500);
