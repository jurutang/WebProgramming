const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<h1>Hi! My Name is Ju-Young</h1>");
    res.end("Hello World!");
});

server.listen(port,hostname, () => {
    console.log("server listens on port 1000!");
})
