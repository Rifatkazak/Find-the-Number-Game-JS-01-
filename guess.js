

let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
let output2 = document.getElementById("outputNum");

let number = Math.floor(Math.random()*100)+1;
let example;
var county = 1
btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    if (input == number){
        document.getElementById("container").style.backgroundImage = "url('giphy.gif')"
        output.innerHTML = ` EXCELLENT CORRECT NUMBER : ${number}`
        output2.innerHTML = ` Number of Attempts : ${county}`;


    }else if (input < number){
        document.getElementById("container").style.backgroundImage = "url('giphy-bomp.gif')"

        output.innerHTML = " GUESS A HIGHER NUMBER";
        output2.innerHTML = ` Number of Attempts : ${county}`;
        county++;
        }
        
    if (input > number){
        document.getElementById("container").style.backgroundImage = "url('giphy-bomp.gif')"
        output.innerHTML = " GUESS A LOWER NUMBER";
        output2.innerHTML = `Number of Attempts : ${county}`;
        county++;
    }
});











    //generate a random integer from 1 to 100
 
// const randomNum = Math.floor(Math.random() * 100) + 1;
// var btn = document.getElementById("button");
// county = 1 ;
// btn.onclick=function(){
//     console.log(randomNum);
//     var guess = document.getElementById("input").value;
//     if (guess > randomNum){
//         county++;
//         window.alert("SORRY !! TRY A SMALLER NUMBER");
//     }else if(guess < randomNum){
//         county++
//         window.alert("SORRY !! TRY A BİGGER NUMBER");
//     }else{
//         window.alert("CONGRATULATİONS");
//  }
// }
// ;








// var randomNum = Math.floor(Math.random() * 100) + 1;
// var county  = 10;
// var output = document.getElementById("output").value; 
// function guessNumber(){
//     while (county !== 0){
//         var guess = document.getElementById("input").value;
//         county--;
//         if(guess > randomNum){
//             output.innerHTML("SORRY !! TRY A SMALLER NUMBER");
//         }else if(guess < randomNum){
//             output.innerHTML("SORRY !! TRY A BİGGER NUMBER");
//         }else{
//             output.innerHTML("CONGRATULATİONS")
//         }
        
//     }
// }
