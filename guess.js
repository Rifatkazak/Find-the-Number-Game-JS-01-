

let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
let output2 = document.getElementById("outputNum");

let number = Math.floor(Math.random()*100)+1;
var county = 1
btn.addEventListener("click", function(){
    let input = Number(document.getElementById("userInput").value);

    if (Number.isFinite(input)){
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
    }else{
        alert("Please Enter Only Number")
}
});

