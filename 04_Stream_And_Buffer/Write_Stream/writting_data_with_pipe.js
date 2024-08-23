const fs = require('fs')

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const outWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

//****easy way to write data in stream manner
ourReadStream.pipe(outWriteStream);