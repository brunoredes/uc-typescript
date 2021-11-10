const person = {
    name: 'Brino',
    age: 24
}

type Person = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys]

const anotherPerson: Person = {
    name: '',
    age: 1
}