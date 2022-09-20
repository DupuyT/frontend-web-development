// Bad code lol- its so not DRY

// const jackRabbit = {
//     name: "Jack",
//     height: "very tall",
// };

// const peterRabbit = {
//     name: "Peter",
//     height: "kinda tall",
// };

// console.log(`hello, my name is ${jackRabbit.name} and I am ${jackRabbit.height}`)
// console.log(`hello, my name is ${peterRabbit.name} and I am ${peterRabbit.height}`)
//here is better code lol

// const jackRabbit = {
//     name: "Jack",
//     height: "very tall",
// };

// const peterRabbit= structuredClone(jackRabbit);
// peterRabbit.name = "Peter"
// peterRabbit.height = "kinda tall"

// function sayHello(rabbit){
//     console.log(`hello, my name is ${rabbit.name} and I am ${rabbit.height}`)
// }
// sayHello(jackRabbit);
// sayHello(peterRabbit);

//dayum, now look at THIS code:

// const rabbitProto = {
//     name:"",
//     height:"",

//     sayHello: function(){
//         console.log(`Hello, my name is ${this.name}, and I am ${this.height}`);
//     },
// };

// const jackRabbit = Object.create(rabbitProto);
// const peterRabbit = Object.create(rabbitProto);

// jackRabbit.name= "Jack";
// jackRabbit.height= "very tall";

// peterRabbit.name="Peter";
// peterRabbit.height="kinda tall";

// jackRabbit.sayHello();
// peterRabbit.sayHello();

//but actually...look at THIS THIS code:

// function createRabbit(name, height){
//     const rabbitProto = {
//         name:"",
//         height:"",

//         sayHello: function(){
//             console.log(`Hello, my name is ${this.name}, and I am ${this.height}`);
//         },
//     };

//     const Rabbit = Object.create(rabbitProto);

//     Rabbit.name= name;
//     Rabbit.height= height;

//     return Rabbit;
// }
// const jackRabbit = createRabbit("jack", "very tall")
// const peterRabbit = createRabbit("peter", "kinda tall")

// jackRabbit.sayHello();
// peterRabbit.sayHello();

//MODERN JS CLASSES- USE THIS I GUESS

class Rabbit {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    sayHello(){
        console.log(`Hello! My name is ${this.name}, and I am ${this.height}.`);
    }
}

const jackRabbit = new Rabbit("Jack", "very tall");
const peterRabbit = new Rabbit("Peter", "kinda tall");

jackRabbit.sayHello();
peterRabbit.sayHello();