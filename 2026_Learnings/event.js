const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
    console.log("Order received! Baking pizza...");
    console.log(`Baking a ${size} pizza with ${topping}!`);
});

emitter.on("order-pizza", (size) => {
    if(size === "large") {
        console.log("Adding extra cheese for large pizza!");
    }
})

console.log("Placing order for pizza...");

emitter.emit("order-pizza", "large", "mushroom");