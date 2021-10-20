// Part 1
console.log('Hello Typescript');

// Part 2 ES6/7:
// Arrow function and implicit return
function arrowFunctionAndImplicitReturn(): void {
    const pizzas = [
        { name: 'Peperoni', topics: ['peperoni'] }
    ];

    pizzas.map(pizza => pizza.name.toUpperCase());

    console.log(pizzas);
}

// object literals
function objectLiterals(): void {
    const pizza = {
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
        pizza,
        toppings
    };
    console.log(order);
}


// rest operator
function restOperator(): void {
    function sumAll(message: string, ...arr: number[]) {
        console.log(arguments); // this reserved word show us the object map
        return arr.reduce((prev, next) => prev + next);
    }

    sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

}

// array spread

function arraySpread(): void {
    const toppings = ['bacon', 'chilli'];
    const newToppingss = ['Margherita'];

    /** how to merge both of arrays? */
    const allToppings = [...toppings, ...newToppingss]; // kep the references of all arrays
    // toppings.concat(newToppingss);

    // object spread operator
    const pizza = { name: 'margherita' };
    const toppingsPizza = ['pepperoni'];
    const orderPizza = {
        ...pizza,
        toppingsPizza
    }
    /**
     * this copy also can be:
     * 
     * var newOrderPizzza = Object.assign({}, pizzza, {toppingsPizzza});
     */
}

// destructuring object and array
function destructuring(): void {
    const piza = {
        name: 'margherita',
        toppings: ['margherita'],
    };

    function orderPiza({ name: pizzaName, toppings: pizzaToppics }: typeof piza): void {
        console.log(pizzaName, pizzaToppics);
    }

    const { name: pizzaName } = piza;

    const toppings2 = ['rice', 'bean'];
    const [first, second] = toppings2;

}

// number, arguments and functions
function numberTypes(): void {
    const pizzaCost: number = 10;
    const pizzaToppings: number = 5;

    function calculatePrice(cost: number, toppings: number): number {
        return cost + 1.5 * toppings;
    }

    const cost: number = calculatePrice(pizzaCost, pizzaToppings);
    console.log(`Pizza costs ${cost}`);
}