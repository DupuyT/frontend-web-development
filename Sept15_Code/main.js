window.addEventListener("click", ()=>{
   console.log("in click function!"); 
})

let input = document.querySelector("#text-input");
input.addEventListener("change", ()=>{
    if(input.value == 2){
        console.log("input.value == 2");
    }
    if (input.value === 2){
        console.log("input.value === 2");
    }
    console.log(typeof input.value);
})

let inputTypo = document.getElementById('textinput');
inputTypo.addEventListener('change', ()=>{
    console.log(inputTypo.value)
})