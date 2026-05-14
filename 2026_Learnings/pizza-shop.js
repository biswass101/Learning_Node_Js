const EventEmitter = require("events");


class PizzaShop extends EventEmitter{
    constructor() {
        super();
        this.orderNumer = 0;
    }

    order(size, topping) {
        this.orderNumer++;
        this.emit("order", size, topping);
    }

    displayOrderNumber() {
        console.log(`Order number: ${this.orderNumer}`);
    }
}


module.exports = PizzaShop;