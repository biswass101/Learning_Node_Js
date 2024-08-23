//behind the scene
//instant invoked function(iif)
// (function(){
//     console.log("Hello");
// })()

// (function (exports, require, module, __filename, __dirname) {
//   var people = ["Niloy", "Piloy", "Giloy"];
//   var a = 3;
//   function test() {
//     console.log("Testing");
//   }
//   // console.log(module);
//   module.exports = people;
// });

var people = ["Niloy", "Piloy", "Giloy"];
var a = 3;
function test() {
  console.log("Testing");
}
// console.log(module);
// module.exports = people; //single exposrting
//multiple exporting-->
// module.exports = {
//   people : people,
//   a : a,
//   test : test,
// }

//another way-->
module.exports = {
  people,
  a,
  test
}