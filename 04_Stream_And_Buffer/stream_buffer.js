const fs = require('fs')

//reading a file in a streaming way-->
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

ourReadStream.on('data', (chunk) => {
    console.log(chunk); // we just get binary data in some chunk of buffers
});