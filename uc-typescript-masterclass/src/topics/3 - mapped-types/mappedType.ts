function aa() {
    interface Person {
        name: string;
        age: number;
        weight: number;
    }

    const person: Person = {
        name: 'brino',
        age: 24,
        weight: 98.1
    };

    type MyReadonly<T> = {
        readonly [P in keyof T]: T[P];
    };

    function freeze<T>(obj: T): MyReadonly<T> {
        return Object.freeze(obj);
    }

    const newPerson = freeze(person);
    // newPerson.age = 1;    -> imutavel
}