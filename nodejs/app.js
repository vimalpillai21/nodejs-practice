const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.headers, req.method);
    const url = req.url;
    if(url == '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<body><form action="/message" method="POST"><input type="text"><input type="submit" value="submit"></form></body>')
        res.write('</html>')
        return res.end(); 
    }
    // process.exit()
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<body>Hello world!</body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);
 