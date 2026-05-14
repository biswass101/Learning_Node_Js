// const Buffer = require("buffer");

const buffer = new Buffer.from("Vishwas", "utf-8");

// console.log(buffer.constants.MAX_LENGTH);


// buffer.write("Code"); //buffer has fixed size, limited memory
buffer.write("NaeemBiswassNiloy");

// console.log(buffer.constants.MAX_LENGTH);

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());

