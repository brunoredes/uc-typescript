// Part 1
console.log('Hello Typescript');

// Part 2 ES6/7:
// Arrow function and implicit return
const pizzas = [
    { name: 'Peperoni', topics: ['peperoni'] }
];

pizzas.map(pizza => pizza.name.toUpperCase());

console.log(pizzas);

// object literals

const pits = {
    name: 'pepperoni',
    price: 15,
    getName() {
        return this.name;
    }
    /*if u want to use arrow instead conventional function, remember the following thing: arrow function doesn't bind this context, so you want to use the object name
    
    getName: () => {
        return pizza.name;
    }
    */
}
const toppings = ['pepperoni'];

const order = {
    pits,
    toppings
};
console.log(order);


// rest operator

function sumAll(message: string, ...arr: number[]) {
    console.log(arguments); // this reserved word show us the object map
    return arr.reduce((prev, next) => prev + next);
}

sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// array spread

const toppingss = ['bacon', 'chilli'];
const newToppingss = ['Margherita'];

/** how to merge both of arrays? */
const allToppings = [...toppings, ...newToppingss]; // kep the references of all arrays
// toppings.concat(newToppingss);

// object spread operator
const pizzza = { name: 'margherita' };
const toppingsPizza = ['pepperoni'];
const orderPizzza = {
    ...pizzza,
    toppingsPizza
}
/**
 * this copy also can be:
 * 
 * var newOrderPizzza = Object.assign({}, pizzza, {toppingsPizzza});
 */