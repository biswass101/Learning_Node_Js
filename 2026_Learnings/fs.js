const fs = require('fs');

console.log("First");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("Third");



fs.writeFileSync("./greet.txt", "Hello, World!", "utf-8");

fs.writeFile("./greet.txt", "Hello, Node.js!", "utf-8", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("File written successfully!");
    }
});
