const path = require('node:path');

let cl = console.log;

// cl(__filename);
// cl(__dirname);


// // get the last part of the path
// cl(path.basename(__filename));
// cl(path.basename(__dirname));

// // get the extension of the file]
// cl(path.extname(__filename));
// cl(path.extname(__dirname));


// cl(path.parse(__filename));


// cl(path.isAbsolute(__filename));
// cl(path.isAbsolute('./data.json'))



console.log(path.join("/folder1", "folder2", "file.text"));

console.log(path.join("/folder1", "/user", "../file.txt"));

console.log(path.join(__dirname, "data.json"));

// understanding path.resolve
cl("\n========Understanding path.resolve========\n");

console.log(path.resolve("folder1", "folder2", "file.text"));

console.log(path.resolve("/folder1", "folder2", "file.text"));

console.log(path.resolve("/folder1", "//user", "../file.text"));