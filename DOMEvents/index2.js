let clickCookieButton = document.querySelector("#cookie");
let counter = document.querySelector("#counter");

let currentCount = 0;

clickCookieButton.addEventListener("click", function(){

    currentCount = currentCount + 1;
    counter.textContent = currentCount;
})


//////////////////////////////////////////////////////////////////////////// --------------------------
//#region 
// --------------------------
//#endregion 

let paragraphText = document.querySelector("#text");
let plusFontButton = document.getElementById("plusFont");
let minusFontButton = document.getElementById("minusFont");
let fontSize = 10;

function formatFontSize(x){
 return `${x}rem`

}

plusFontButton.addEventListener("click", function(){
    if(fontSize < 100) fontSize++;

    
    paragraphText.style.fontSize = formatFontSize(fontSize)
})

minusFontButton.addEventListener("click", function(){
    if(fontSize> 1) fontSize--;
        paragraphText.style.fontSize = formatFontSize(fontSize);
})


//////////////////////////////////////////////////////////////////////////// --------------------------
//#region 
// --------------------------
//#endregion 


let greenScreenInput = document.getElementById("greenScreenColor");
let greenScreenButton = document.getElementById("greenScreenButton");

greenScreenButton.addEventListener("click", function(){
    let userInput = greenScreenInput.value;
   if(userInput == "blue" || userInput == "white" || userInput == "yellow" || userInput == "green" || userInput == "red"){
        document.body.style.backgroundColor = userInput
   }
})



//////////////////////////////////////////////////////////////////////////// --------------------------
//#region 
// --------------------------
//#endregion 


let crane = document.getElementById("craneBox");
let upButton = document.getElementById("upButton");
let downButton = document.getElementById("downButton");
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
let leftPostion = 0;
let rightPosition = 0;
let downPosition = 0;
let upPosition = 0;

upButton.addEventListener("click", function(){
    crane.style.position = "relative";
    upPosition+= 5;
    crane.style.bottom = `${upPosition}px`
})

downButton.addEventListener("click", function(){
    crane.style.position = "relative";
    downPosition+= 5;
    crane.style.top = `${downPosition}px`
})

leftButton.addEventListener("click", function(){
    crane.style.position = "relative";
    leftPostion+= 5;
    crane.style.right = `${leftPostion}px`
})

rightButton.addEventListener("click", function(){
    crane.style.position = "relative";
    rightPosition+= 5;
    crane.style.left = `${rightPosition}px`
})



//////////////////////////////////////////////////////////////////////////// --------------------------
//#region 
// --------------------------
//#endregion 

let diceNumberInput = document.querySelector("#diceNumber");
let diceButton = document.querySelector("#rollDice");
let diceNumberOutput = document.querySelector("#diceOutput");

diceNumberOutput.innerHTML = `
    <h1>Hello world</h1>
`

diceButton.addEventListener("click", function(){
    let userInput = diceNumberInput.value;

    let generatedNum = Math.ceil(Math.random() * userInput)

    
    diceNumberOutput.textContent = generatedNum;
})
