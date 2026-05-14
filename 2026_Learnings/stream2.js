const fs = require("fs");


const readableStream = fs.createReadStream("file1.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
})

readableStream.on("data", (chunk) => {
    console.log(chunk);
})