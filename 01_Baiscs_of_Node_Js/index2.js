// console.log(window); //not available window object

// console.log("Run it first");

// setTimeout(() => {
//     console.log("Runnng after 1 second!!");
// }, 1000);

// console.log(global) // browser window equivalent

// const a = 10;
// console.log(global.a); //not attached with global objest like browser window

//current path of file and path with extensions(.js) and it's not comming from global object
console.log(__dirname);
console.log(__filename);