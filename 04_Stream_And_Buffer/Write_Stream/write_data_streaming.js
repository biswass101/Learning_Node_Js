const fs = require('fs')


const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const outWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on('data', (chunk) => {
    outWriteStream.write(chunk);
});