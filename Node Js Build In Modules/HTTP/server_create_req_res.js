const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.write('<h1>How are You Server</h1>');
        res.write('What are you doing?');
        res.end();
    } else if (req.url === '/about-us')
    {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not Found!!');
        res.end();
    }
});

server.listen(3000);
console.log("listening on port 3000");