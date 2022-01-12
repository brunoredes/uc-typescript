const myObject = {
    myMethod() {
        console.log('Object:::', this);
    }
}
// myObject.myMethod(); // object scope

function myFunction(...text: string[]) {
    console.log('Function:::', this, text);
}

const bindFunction = myFunction.bind(myObject, 'ABC', 'DEF');
bindFunction('ABC', 'DEF');
bindFunction('123', '456');
bindFunction('ABC', 'DEF');
myFunction.call(myObject, 'ABC', 'DEF');
myFunction.apply(myObject, ['ABC', 'DEF']);