function funcOverload() {
    function reverseFunction(string: string): string;
    function reverseFunction<T>(array: T[]): T[];

    function reverseFunction<T>(stringOrArray: string | T[]): string | T[] {
        if (typeof stringOrArray === 'string') {
            return stringOrArray.split('').reverse().join('');
        }
        return stringOrArray.slice().reverse();
    }

    reverseFunction('Margherita');
    reverseFunction(['bacon', 'pepperoni', 'mushrooms']);
}