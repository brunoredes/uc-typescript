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

// string type, string literals
function stringTypes(): void {
    const coupon: string = 'pizza25';

    function normalizeCoupon(code: string): string {
        return code.toUpperCase();
    }

    const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
    console.log(couponMessage);
}

// boolean ts
function booleanType() {
    const pizzas: number = 5;
    function offerDiscount(orders: number): boolean {
        return orders >= 3;
    }

    offerDiscount(pizzas) ? console.log(`You're entitled to a discount!`) : console.log(`Order more than 3 pizzas for a discount`);
}

// any type
function anyType() {
    let coupon;

    coupon = 25;
    coupon = '25';
    coupon = true;
    // any accept lots of type
}

function implicitVsExplicitTypes(): void {
    let implicitCoupon = 'pizza25';
    // let explicitCoupon: string = 'pizza25';
    let explicitCoupon: string;

    explicitCoupon = 'pizza25';
}

function voidType(): void {
    let selectedTopping: string = 'margherita';
    function selectTopping(topping: string): void {
        selectedTopping = topping;
    }

    selectTopping('bacon');
    console.log(selectTopping);
}

function neverType(): void {
    function orderError(error: string): never {
        throw new Error(error);
    }

    orderError('Something went wrong');
}

function nullUndefinedStrictNullChecks() {
    let coupon: string | null = 'pizza25';

    function removeCoupon() {
        coupon = null;
    }

    console.log(coupon);
    removeCoupon();
    console.log(coupon);
}

function unionTypesAndLiteralTypes() {
    // union type é quando usamos o operador "|" na tipagem;
    // literal types é quando tipamos com valores fixos, sem ser os tipos padrões

    let pizzaSize: string = 'small';
    // let pizzaSize: number = 1;

    // function selectSize(size: 1 | 2 | 3): void {
    // pizzaSize = size;
    // }
    function selectSize(size: 'small' | 'medium' | 'large'): void {
        pizzaSize = size;
    }

    selectSize('medium');
    // selectSize(3);
    console.log(`Pizza sizes is ${selectSize}`);
}

function functionTypes() {
    // let orderPrice: Function;
    let orderPrice: (price: number, quantity: number) => number;

    orderPrice = (x, y) => x * y;

    const price = orderPrice(25, 2);
    console.log(`Total price: ${price}`);
}

function functionTypesWithOptionals() {
    // let orderPrice: Function;
    let orderPrice: (price: number, quantity?: number) => number;

    orderPrice = (x, y) => {
        return y ? x * y : x;
    };

    const price = orderPrice(25, 2);
    console.log(`Total price: ${price}`);
}

function typedFunction() {
    // let orderPrice: Function;
    let orderPrice: (price: number, quantity?: number) => number;

    orderPrice = (x, y = 5) => x * y;

    const price = orderPrice(25);
    console.log(`Total price: ${price}`);
}

function objectType() {
    let pizza: { name: string, price: number, getName(): string };

    pizza = {
        name: 'Plain old Pepperoni',
        price: 20,
        getName() {
            return pizza.name
        }
    };
}

// data structures
function arrayTypesAndGenerics() {
    let sizes: string[];

    sizes = ['small', 'medium', 'large'];

    // generics type
    let toppings: Array<string>;
    toppings = ['pepperoni', 'tomato', 'bacon'];
}

function tupleTypes() {
    let pizza: [string, number, boolean];

    pizza = ['Pepperoni', 20, true];
}


// Type Alias and Assertions

// Type Alias
function typeAlias(): void {
    type Size = 'small' | 'medium' | 'large';

    type Callback = (size: Size) => void;

    let pizzaSize: Size = 'small';

    const selectSize: Callback = (x): void => {
        pizzaSize = x;
    }

    selectSize('small');
}

function typeAssertions() {
    type Pizza = {
        name: string
        toppings: number
    }
    const pizza: Pizza = { name: 'margherita', toppings: 5 };

    const serializedPizza = JSON.stringify(pizza);

    function getNameFromJson(object: string) {
        try {
            return (JSON.parse(object) as Pizza).name;
        } catch (error) {
            console.log('Error during parse value to object', error);
            return null;
        }
    }

    getNameFromJson(serializedPizza);
}

(async () => {
    // neverType(),
    await Promise.all([
        arraySpread(),
        arrowFunctionAndImplicitReturn(),
        destructuring(),
        numberTypes(),
        objectLiterals(),
        restOperator(),
        stringTypes(),
        booleanType(),
        anyType(),
        implicitVsExplicitTypes(),
        voidType(),
        unionTypesAndLiteralTypes(),
        functionTypes(),
        functionTypesWithOptionals(),
        typedFunction(),
        objectType(),
        arrayTypesAndGenerics(),
        typeAlias(),
        typeAssertions()
    ]);
})();