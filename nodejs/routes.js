const fs = require('fs');

const someText = 'Hello World!!!';

const requestHandler = (req, res) => {
    // console.log(req.url,req.headers, req.method);
    const url = req.url;
    const method = req.method;
    if(url == '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><input type="submit" value="submit"></form></body>')
        res.write('</html>')
        return res.end(); 
    }
    if(url=='/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            // wait till data iw written to the file
            // fs.writeFileSync('message.txt',message);
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
            // res.writeHead(302,{'Location':'/'});
            // return res.end();
        });
    }
    // process.exit()
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<body>Hello world!</body>')
    res.write('</html>')
    res.end();
}
// module.exports = {
//     handler: requestHandler,
//     text: someText
// }

// module.exports.handler = requestHandler;
// module.exports.text = someText;

exports.handler = requestHandler;
exports.text = someText;