const http = require('http')
const fs = require('fs')

/*
req:(server)
    1. a readable stream
    2. can read in streaming way

res:(client)
    1. a writable stream
    2. can write in streaming way


*/


const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(__dirname + '/bigData.txt', 'utf8')
    myReadStream.pipe(res)
})

server.listen(3000)
console.log('Listening on port 3000');