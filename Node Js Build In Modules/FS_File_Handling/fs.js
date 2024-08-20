const fs = require('fs');
/*********************For Writting File**************************/
fs.writeFileSync('myFile.txt', 'Hello programmers.'); // to create and write something on the file
//if we do this same the existing file will be replaced-->
// fs.writeFileSync('myFile.txt', 'How are You?');

//if we want to appent something withe the existing file instead of overriding then -->
fs.appendFileSync('myFile.txt', ' How are You?')

/*********************For Reading File**************************/
const data = fs.readFileSync('myFile.txt')
console.log(data.toString());

//Doing Same thing in Asychronous way-->
fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString());
})

console.log(".....I will be consoled before the file reading....");