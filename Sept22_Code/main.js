// const input = document.getElementById('input');
// input.addEventListener('change', function(){
//     if (input.value > 10){
//         throw new Error ("woah that is too big!");
//     }
//     console.log("Thanks, that's a good number");
// });


// const input = document.getElementById('input');
// function handleInput(){
//     if (input.value > 10){
//         throw new Error ("woah that is too big!");
//     }
//     console.log("Thanks, that's a good number");
// };

// input.addEventListener('change', function(){
//     try{
//         handleInput();
//     } catch (e1) {
//         console.log(e1)
//     }
// });


// function someReallyLongFunction(){
//     let sum =0;
//     for (let i =0; i  <10000000000; i++){
//         sum +=i;
//     }
//     console.log(`the really big sum is ${sum}`)
//     return sum;
// }

// const result = someReallyLongFunction();
// console.log(result)
// console.log("This takes a really long time.")

//async code using settimeout

// function someReallyLongFunction(){
//     let sum =0;
//     for (let i =0; i  <10000000000; i++){
//         sum +=i;
//     }
//     console.log(`the really big sum is ${sum}`);
//     return sum;
// }

// setTimeout(someReallyLongFunction);
// setTimeout(function(){
//     const result = someReallyLongFunction();
//     console.log(result);
// })

// console.log("This takes a really long time.")

// modern javascript uses promises, which can be found below.

// function takesAReallyLongTimeWithPromise(){
//     return new Promise(function(resolve, reject) {
//         let sum =0;
//         for (let i =0; i  <10000000000; i++){
//             sum +=i;
//         }
//         console.log(`the really big sum is ${sum}`);
//         resolve(sum);
//     });
// }

// takesAReallyLongTimeWithPromise()
//     .then(function(result) {
//          console.log(result);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });
// console.log("This takes place after takesareallylongtime");

//async bitttch

// async function takesareallylongtimeAsync() {
//     let sum =0;
//     for (let i =0; i  <10000000000; i++){
//         sum +=i;
//     }
//     console.log(`the really big sum is ${sum}`);
//     return sum;
// }

// const result = await takesareallylongtimeAsync();
// console.log(result);

// bad loop with setTimeout

// let counter = 0;
// function loop(){
//     console.log('loop!');
//     console.log(counter);
//     counter++;
// }
// const intervalId = setInterval(loop);

//do it best with requestAnimationFrame
let counter = 0;
function loop(){
    console.log('loop!');
    console.log(counter);
    counter++;

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop);