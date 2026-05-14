const fs = require('fs/promises');

const cl = console.log;

cl("First");

fs.readFile('file.txt', 'utf-8')
.then(data => console.log(data + " (read using promises)"))
.catch(err => console.log(err));

cl("Second");



async function readFile() {
    try {
        const data = await fs.readFile('file.txt', 'utf-8');
        cl(data + " (read using async/await)");
    } catch (error) {
        cl(error);
    }
}

readFile();

cl("Third");