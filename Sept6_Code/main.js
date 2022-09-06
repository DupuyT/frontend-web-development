const x = 2;
let y = 3;

const str = "this is a string";
const template = `this is a ${x} template literal`;

console.log(x +y);
console.log(str);
console.log(template);

const myArray = [0, 2, 7, 8];
console.log(myArray);
console.log(myArray[0]);
myArray.push(10);
console.log(myArray);

const classroom = {
    building: 'ATLAS',
    room: 104
};

console.log(classroom);
console.log(classroom.building);
console.log(classroom["room"]);

classroom.occupancyLimit = 30;

console.log(classroom);

y = 11;
const stringy = "11";
if (y === stringy){
    console.log(y);
} else{
    console.log(x);
}

while (y < 15){
    console.log(y);
    y++;
}

for (let i = 0; i < myArray.length; i++){
    console.log(`index: ${i}`);
    console.log(`value: ${myArray[i]}`);
}

for (const item of myArray) {
    console.log(`value: ${item}`);
}

for (const key in classroom) {
    console.log(`key: ${key}`);
    console.log(`value: ${classroom[key]}`);
}

myArray.forEach(function(item){
    console.log(`value: ${item}`);
});

myArray.forEach(function(item){
    console.log(`value: ${item}`);
});

function add(x, y){
console.log(x);
return x + y;
}

console.log(add(7, 15));
x
const subtract = (x, y) => {
    return x -y;
}

console.log(subtract(7, 15));

const h1 = document.getElementById("heading");
h1.innerText = "Hello from Javascript instead biiitches!"

const divs = document.querySelectorAll(".my-div");
for (const div of divs) {
    div.style.backgroundColor = "blue";
}

const div = document.querySelector("div");

const button = document.querySelector("button");

div.addEventListener("mouseenter", ()=> {
    div.style.backgroundColor = "red"
})


div.addEventListener("mouseleave", ()=> {
    div.style.backgroundColor = "blue"
})
