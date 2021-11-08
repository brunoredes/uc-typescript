// Part 1
console.log('Hello Typescript');

// Part 2 ES6/7:
// Arrow function and implicit return
class ArrowFunction {
    arrowFunctionAndImplicitReturn(): void {
        const pizzas = [
            { name: 'Peperoni', topics: ['peperoni'] }
        ];

        pizzas.map(pizza => pizza.name.toUpperCase());

        console.log(pizzas);
    }
}

// object literals
class ObjectLiterals {
    objectLiterals(): void {
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
}

// rest operator
class RestSpreadOperator {

    restOperator(): void {
        function sumAll(message: string, ...arr: number[]) {
            console.log(arguments); // this reserved word show us the object map
            return arr.reduce((prev, next) => prev + next);
        }

        sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    }

    // array spread

    arraySpread(): void {
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
}

class Destructuring {
    // destructuring object and array
    destructuring(): void {
        const pizza = {
            name: 'margherita',
            toppings: ['margherita'],
        };

        function orderPiza({ name: pizzaName, toppings: pizzaToppics }: typeof pizza): void {
            console.log(pizzaName, pizzaToppics);
        }

        const { name: pizzaName } = pizza;

        const toppings2 = ['rice', 'bean'];
        const [first, second] = toppings2;

    }
}

class NumberTypes {
    // number, arguments and functions
    numberTypes(): void {
        const pizzaCost: number = 10;
        const pizzaToppings: number = 5;

        function calculatePrice(cost: number, toppings: number): number {
            return cost + 1.5 * toppings;
        }

        const cost: number = calculatePrice(pizzaCost, pizzaToppings);
        console.log(`Pizza costs ${cost}`);
    }

}

class StringTypes {
    // string type, string literals
    stringTypes(): void {
        const coupon: string = 'pizza25';

        function normalizeCoupon(code: string): string {
            return code.toUpperCase();
        }

        const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
        console.log(couponMessage);
    }

}

class BooleanType {
    // boolean ts
    booleanType() {
        const pizzas: number = 5;
        function offerDiscount(orders: number): boolean {
            return orders >= 3;
        }

        offerDiscount(pizzas) ? console.log(`You're entitled to a discount!`) : console.log(`Order more than 3 pizzas for a discount`);
    }
}

class AnyType {
    // any type
    protected anyType(): void {
        let coupon;

        coupon = 25;
        coupon = '25';
        coupon = true;
        // any accept lots of type
    }
}

class ImplicitAndExplicit {
    implicitVsExplicitTypes(): void {
        let implicitCoupon = 'pizza25';
        // let explicitCoupon: string = 'pizza25';
        let explicitCoupon: string;

        explicitCoupon = 'pizza25';
    }

}

class VoidType {
    voidType(): void {
        let selectedTopping: string = 'margherita';
        function selectTopping(topping: string): void {
            selectedTopping = topping;
        }

        selectTopping('bacon');
        console.log(selectTopping);
    }
}
class NeverType {
    neverType(): void {
        function orderError(error: string): never {
            throw new Error(error);
        }

        orderError('Something went wrong');
    }
}

class NullUndefinedAndStrictNullChecks {
    nullUndefinedStrictNullChecks() {
        let coupon: string | null = 'pizza25';

        function removeCoupon() {
            coupon = null;
        }

        console.log(coupon);
        removeCoupon();
        console.log(coupon);
    }
}

class UnionTypesAndLiteralTypes {
    unionTypesAndLiteralTypes() {
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
}
class FunctionTypes {
    functionTypes() {
        // let orderPrice: Function;
        let orderPrice: (price: number, quantity: number) => number;

        orderPrice = (x, y) => x * y;

        const price = orderPrice(25, 2);
        console.log(`Total price: ${price}`);
    }

    functionTypesWithOptionals() {
        // let orderPrice: Function;
        let orderPrice: (price: number, quantity?: number) => number;

        orderPrice = (x, y) => {
            return y ? x * y : x;
        };

        const price = orderPrice(25, 2);
        console.log(`Total price: ${price}`);
    }

    typedFunction() {
        // let orderPrice: Function;
        let orderPrice: (price: number, quantity?: number) => number;

        orderPrice = (x, y = 5) => x * y;

        const price = orderPrice(25);
        console.log(`Total price: ${price}`);
    }
}

class ObjectTypes {
    objectType() {
        let pizza: { name: string, price: number, getName(): string };

        pizza = {
            name: 'Plain old Pepperoni',
            price: 20,
            getName() {
                return pizza.name
            }
        };
    }
}

class ArrayTypesAndGenerics {
    // data structures
    arrayTypesAndGenerics() {
        let sizes: string[];

        sizes = ['small', 'medium', 'large'];

        // generics type
        let toppings: Array<string>;
        toppings = ['pepperoni', 'tomato', 'bacon'];
    }

    tupleTypes() {
        let pizza: [string, number, boolean];

        pizza = ['Pepperoni', 20, true];
    }

}
class TypeLiasAndAssertions {
    // Type Alias and Assertions

    // Type Alias
    typeAlias(): void {
        type Size = 'small' | 'medium' | 'large';

        type Callback = (size: Size) => void;

        let pizzaSize: Size = 'small';

        const selectSize: Callback = (x): void => {
            pizzaSize = x;
        }

        selectSize('small');
    }

    typeAssertions() {
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

}

class DivingIntoInterfaces {
    creatingInterfaces() {
        interface Sizes {
            sizes: string[];

        }
        interface Pizza extends Sizes {
            name: string;
            toppings?: number;
            getAvailableSizes(): string[];

            // index signature
            [key: number]: string;
        }

        let pizza: Pizza;

        function createPizza(name: string, sizes: string[]): Pizza {
            return {
                name,
                sizes,
                getAvailableSizes() { return this.sizes }
            };
        }

        pizza = createPizza('Margherita', ['small', 'medium']);
        pizza.toppings = 1;
        pizza[1] = 'xyz';
    }
}

class ClassesPropAndInheritance {

}
function classesPropAndInheritance() {
    class Sizes {
        constructor(private sizes: Array<string>) { }

        set availableSizes(sizes: string[]) {
            this.sizes = sizes;
        }

        get availableSizes(): string[] {
            return this.sizes;
        }
    }
    const sizes = new Sizes(['small', 'medium']);
    console.log(sizes.availableSizes); // getter
    sizes.availableSizes = ['medium', 'large']; // setter
    console.log(sizes.availableSizes); // getter
    class Pizza extends Sizes {
        public toppings: string[] = [];

        constructor(readonly name: string, sizes: string[]) {
            super(sizes);
        }

        public addTopping(topping: string) {
            this.toppings.push(topping);
        }

    }

    const pizza = new Pizza('Pepperoni', ['small', 'medium']);
    pizza.addTopping('pits');

}