interface Person {
    name: string;
    age?: number;
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

function printAge(person: Required<Person>): string {
    return `${person.name} is ${person.age}`;
}

const person: Required<Person> = {
    name: 'brino', age: 24
}
person.age = 1

const age = printAge(person);