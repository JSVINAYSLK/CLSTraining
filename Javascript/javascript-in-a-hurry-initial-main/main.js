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
function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

const greetingText="Good Morning!"
const weatherCondition="Sunny"
const userLocation="Chittoor"
let temperature=33.7

let celsiusText=`The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}C outside.`
let fahrText=`The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature)}F outside.`

document.querySelector("#greeting").innerHTML=greetingText
document.querySelector("p#weather").innerHTML=celsiusText
document.querySelector(".weather-group").addEventListener("click",function(e){
    if(e.target.id=="celsius"){
        document.querySelector("#weather").innerHTML=celsiusText;
    }else if(e.target.id=="fahr"){
        document.querySelector("#weather").innerHTML=fahrText;
    }
});
// let localTime = new Date();
// document.querySelector("span[data-time=hours]").textContent=localTime.getHours();
// document.querySelector("span[data-time=minutes]").textContent=localTime.getMinutes();
// document.querySelector("span[data-time=seconds]").textContent=localTime.getSeconds();
setInterval(function() {
    localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent=localTime.getHours().toString().padStart(2, '0');
    document.querySelector("span[data-time=minutes]").textContent=localTime.getMinutes().toString().padStart(2, '0');
    document.querySelector("span[data-time=seconds]").textContent=localTime.getSeconds().toString().padStart(2, '0');
}, 1000);

const galleryImages=[
    {
        src:"./assets/gallery/image1.jpg",
        alt:"Thumbnail Image 1"
    },
    {
        src:"./assets/gallery/image2.jpg",
        alt:"Thumbnail Image 2"
    },
    {
        src:"./assets/gallery/image3.jpg",
        alt:"Thumbnail Image 3"
    }
]
let mainImage=document.querySelector("#gallery > img");
let thumbnails=document.querySelector("#gallery .thumbnails");
mainImage.src=galleryImages[0].src;
mainImage.alt=galleryImages[0].alt;
galleryImages.forEach(function(image, index){
    let thumbnail=document.createElement("img");
    thumbnail.src=image.src;
    thumbnail.alt=image.alt;
    thumbnail.dataset.index=index;
    thumbnails.appendChild(thumbnail);
    thumbnail.addEventListener("click", function(){
        mainImage.src=image.src;
        mainImage.alt=image.alt;
    });
});

