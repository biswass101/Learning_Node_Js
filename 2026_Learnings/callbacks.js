// higherOrder functions and callbacks general

console.log("===============General Form of callbacks and higher order functions===============");
function callBackFn(param) {
    console.log("Inside callBackFn function");
    console.log(param);
}


function higherOrderFn(callBackFn) {

    console.log("Inside higherOrderFn function");
    const param = "This is a parameter from higherOrderFn";
    callBackFn(param);
}

higherOrderFn(callBackFn);

console.log("\n===============Callbacks with parameters===============");

function greetFn (name) {
    console.log("Inside greetFn function");
    console.log(`Hello ${name}`);
}

function greetNiloy(greetFn) {
    console.log("Inside greetNiloy function");
    const name = "Niloy";
    greetFn(name);
}

greetNiloy(greetFn);