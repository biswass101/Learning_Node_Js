const fs = require('fs');

console.log("First");

fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});

console.log("Last");