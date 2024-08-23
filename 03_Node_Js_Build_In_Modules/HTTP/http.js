const http = require('http');

//creating server
const server = http.createServer(); //an event

//raising event
// server.on('connection', () => {
//     console.log("New Connection ... ");
// })

server.listen(3000); //event emmited

console.log('listening on port 3000');
