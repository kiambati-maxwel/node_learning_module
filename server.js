const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('siliconBadger');
});

const port = process.env.PORT || 4000;
server.listen(port);

console.log('sliconBadger started on port ' + port);