// function testAlert(){
//     alert("Test 1");
//     alert("Test 2");
// }
// testAlert();

// console.log(1+2+4);

// document.getElementById("greeting").innerHTML="Good Afternoon"
// Menu Section
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open")
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
});
// var Customer="Vinay"

// console.log("Hello "+Customer);
// const Customer="vinay";
// let balance=9000;
// console.log("Hi "+Customer+". Your balance is "+balance);
// balance =balance+300;

// // console.log("After adding , your new balance is "+balance);
// header section
const greetingText="Good Morning!"
const weatherCondition="Sunny"
const userLocation="Chittoor"
let temperature=39.7
let weatherText=`The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toString()} outside.`

document.querySelector("#greeting").innerHTML=greetingText

document.querySelector("p#weather").innerHTML=weatherText
