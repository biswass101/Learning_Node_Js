const path = require('path')
const myPath = 'D:/Fullstack Development/Backend Development/Node Js/Node Js Build In Modules/path/index.js'
console.log(path.basename(myPath)); //it will return basename of that path
console.log(path.dirname(myPath)); //Full path name
console.log(path.extname(myPath)); //extension name
console.log(path.parse(myPath)); //all details about path in a objet form