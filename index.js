var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('Server listening');
    res.end('Hello World');
})
.listen(8080, function() {
    console.log('127.0.0.1')
});