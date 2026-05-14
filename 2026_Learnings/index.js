// const data = require('./data.json');

// console.log(data.Location.Country);



const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log("Order received! Baking pizza...");
    console.log(`Baking a ${size} pizza with ${topping}!`);
    drinkMachine.serveDrink(size);
})

console.log("Placing order for pizza...");

pizzaShop.order("large", "mushroom");
// console.log("\nPlacing another order for pizza...\n");
// pizzaShop.order("small", "pepperoni");

pizzaShop.displayOrderNumber();