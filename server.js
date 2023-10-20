const http = require('http');

const server = http.createServer((req, res) => {
    if (req){
        console.log('hello');
    }

    res.setHeader('Content-Type', 'text/plain');
    res.write('hello, ninjas!!!!');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});