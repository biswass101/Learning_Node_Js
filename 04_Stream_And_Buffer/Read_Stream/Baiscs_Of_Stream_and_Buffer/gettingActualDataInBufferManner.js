const fs = require('fs')

//reading a file in a streaming way-->
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');

ourReadStream.on('data', (data) => {
    //after encoding with the help of utf8 system, we'll get the actual data
    console.log(data); 
});

//another way to read actual data in buffer manner-->
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`)
// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })