const h1 = document.getElementById("h1");
h1.innerText = "With this first line, I am using the DOM to ovverride my text on HTML, what do you think it originally says?!";
h1.style.color = "green";
h1.style.fontSize = "5rem";
h1.style.fontWeight = "900";
let currentColor = 0;
let colorsNumber = 0;
const Colors = [
    "red",
    "orange",
    "yellow",
    "lightgreen",
    "blue",
    "indigo",
    "violet"
];
let isActive = false;
function RainbowBG() {
    if (isActive == true) {
        document.body.style.backgroundColor = Colors[currentColor];
        colorsNumber += 1;
        const changeColor1 = Math.floor(colorsNumber / 25);
        if (changeColor1 > currentColor && changeColor1 < 7) {
            currentColor = changeColor1;
            document.body.style.backgroundColor = Colors[currentColor];
        }
    }
    setTimeout(RainbowBG, 50); //wasn't sure how to include time delay for changing background colors, I referred to your class code for an example
}
function NormalBG() {
    document.body.style.backgroundColor = "white";
    colorsNumber = 0;
    changeColor = 0;
    currentColor = 0;
}
document.addEventListener("mousedown", ()=>{
    isActive = true;
    RainbowBG();
});
document.addEventListener("mouseup", ()=>{
    isActive = false;
    NormalBG();
    console.log("goodbye");
});
let image = document.getElementById("h2");
image.addEventListener("mouseover", function() {
    image.src = "../Images/Frown.png";
    image.alt = "Sadness";
});
image.addEventListener("mouseout", function() {
    image.src = "../Images/Smile.png";
    image.alt = "Happyness!";
});

//# sourceMappingURL=index.0e31516c.js.map
