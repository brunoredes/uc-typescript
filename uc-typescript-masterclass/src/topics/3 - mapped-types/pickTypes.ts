function pickTypes() {
    interface Person {
        name: string;
        age: number;
        adress: {}
    }

    type MyPick<T, K extends keyof T> = {
        [P in K]: T[P];
    }

    const person: Pick<Person, 'name' | 'age'> = {
        name: 'brino',
        age: 24
    }
}