function sayHello(name: String): String {
    console.log(`Hello ${name}`);
    return `Hello ${name}!`;
}

sayHello("Taylor");

interface Dog {
    name: String,
    age: Number
}

const buddy: Dog = {
    name: "buddy",
    age: 8
};

const cookie: Dog = {
    name: "Cookie",
    age: 2
};

class Classroom{
    roomNumber: any;

    constructor(){
        this.roomNumber = 104;
    }
}

const atlas104 = new Classroom()