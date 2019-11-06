const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    let parsedURL = url.parse(req.url,true);

    if (parsedURL.pathname == '/toupper') {
        if (parsedURL.query.text) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(`<html><body><h1>${parsedURL.query.text.toUpperCase()}</h1></body></html>`)
        } else {
            res.writeHead(500,{'Content-Type':'text/html'});
            res.end(`<html><body><h1>Missing Query String Parameter!</h1></body></html>`)
        }
    } else {
        res.writeHead(500,{'Content-Type':'text/html'});
            res.end(`<html><body><h1>Unknown pathname!</h1></body></html>`)
    }
})
server.listen(process.env.PORT || 8099);