const person = {
    name: 'Brino',
    age: 24
}

type Person = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const personName = getProperty(person, 'name');

const anotherPerson: Person = {
    name: '',
    age: 1
}