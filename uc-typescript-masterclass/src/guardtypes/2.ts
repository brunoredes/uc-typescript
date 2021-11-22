class Foo {
    bar() { }
}

const bar = new Foo();
console.log(Object.getPrototypeOf(bar));


class Song1 {
    constructor(public title: string, public duration: number) {}

}

class Playlist {
    constructor(public name: string, public songs: Song[]) {}
}

