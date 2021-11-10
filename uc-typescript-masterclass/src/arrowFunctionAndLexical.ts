class MyClass {
    myMethod() {
        const foo = 123;
        console.log(1, this);
        setTimeout(function () {
            console.log(this);
        }, 0);

        setTimeout(() => { // doesn't bind "this" value, and doesn't create new scope, mantaining the same THIS from the scope above
            console.log(this);
        }, 0);
    }
}

const myclass = new MyClass();
myclass.myMethod();