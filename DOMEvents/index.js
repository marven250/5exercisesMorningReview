document.addEventListener("DOMContentLoaded", function () {
  //EXERCISE 1: Cookie Clicker
  //Assign variable to the element of "cookie" id
  // and variable to the element of "counter" id.
  //Add the event listener as "click" to the "cookie" variable
  // we just created. When we "click" the "cookie" the "counter"
  // text will increment up one.
  const cookie = document.querySelector("#cookie");
  const counter = document.querySelector("#counter");
  cookie.addEventListener("click", function () {
    counter.textContent++;
  });

  //EXERCISE 2: Magnify Text
  //Assign variables to the elements of "text", "plusFont", and "minusFont" ids.
  //Checkout how .getComputedStyle works here: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  //Add the event listener as "click" to the "increaseFont" and "decreaseFont"
  // variables. Increase font will increment the font size as long as it is not
  // already 100px. Dont forget to set the text font size to the acceptable string
  // data. Repeat these steps but instead decrement the font size as long as it is
  // larger or equal to 1px.
  const text = document.querySelector("#text");
  const increaseFont = document.querySelector("#plusFont");
  const decreaseFont = document.querySelector("#minusFont");
  let currentFontSize = parseInt(window.getComputedStyle(text).fontSize);

  increaseFont.addEventListener("click", function () {
    if (currentFontSize >= 100) return;
    ++currentFontSize;
    text.style.fontSize = `${currentFontSize}px`;
  });
  decreaseFont.addEventListener("click", function () {
    if (currentFontSize <= 1) return;
    --currentFontSize;
    console.log(currentFontSize);
    text.style.fontSize = `${currentFontSize}px`;
  });

  //EXERCISE 3: Green Screen
  //Assign variables to the elements of "body" and "greenScreenColor" and
  // "greenScreenButton" ids.
  //Add event listener as "click" to the "colorPickerButton" variable.
  // Set the value of the "colorPicker" variable to lower case - this will
  // prevent any unnecessary errors in the function. Then set the body
  // background color to the value of the "colorPicker" variable.
  const body = document.querySelector("body");
  const colorPicker = document.querySelector("#greenScreenColor");
  const colorPickerButton = document.querySelector("#greenScreenButton");
  colorPickerButton.addEventListener("click", function () {
    //make case insensitive
    colorPicker.value = colorPicker.value.toLowerCase();
    body.style.backgroundColor = colorPicker.value;
  });

  //EXTENSION: Crane Game
  //Assign variables to the elements of "craneImage", "leftButton", "rightButton",
  // "upButton" and "downButton" ids.
  //Add event listenter as "click" to "leftButton", "rightButton", "upButton", and
  // "downButton" variables. Set each one to a relative position to start.
  //Create a new "current" variable for each that will hold the current position of
  // the crane. This is so the crane will move based on current position after clicks
  // have happened. After that, change the position by 10px in the direction selected.
  const craneImage = document.querySelector("#craneImage");
  const leftButton = document.querySelector("#leftButton");
  const rightButton = document.querySelector("#rightButton");
  const upButton = document.querySelector("#upButton");
  const downButton = document.querySelector("#downButton");

  leftButton.addEventListener("click", function () {
    //make image relative to parent
    craneImage.style.position = "relative";
    //get current position
    const currentLeft = parseInt(window.getComputedStyle(craneImage).left);
    //move image left
    craneImage.style.left = `${currentLeft - 10}px`;
  });
  rightButton.addEventListener("click", function () {
    //make image relative to parent
    craneImage.style.position = "relative";
    //get current position
    const currentRight = parseInt(window.getComputedStyle(craneImage).left);
    //move image right
    craneImage.style.left = `${currentRight + 10}px`;
  });
  upButton.addEventListener("click", function () {
    //make image relative to parent
    craneImage.style.position = "relative";
    //get current position
    const currentUp = parseInt(window.getComputedStyle(craneImage).top);
    //move image up
    craneImage.style.top = `${currentUp - 10}px`;
  });
  downButton.addEventListener("click", function () {
    //make image relative to parent
    craneImage.style.position = "relative";
    //get current position
    const currentDown = parseInt(window.getComputedStyle(craneImage).top);
    //move image down
    craneImage.style.top = `${currentDown + 10}px`;
  });

  //EXTENSION: Dice
  //Assign variables to "diceNubmer", "rollDice", and "diceOutput" ids.
  //Add event listener as "click" to "diceButton". Create "randomNumber"
  // variable inside the event listener function that generates a random
  // number value based on the input in variable "diceNumber";

  //Generic random number function:
  //  function generateRandomInteger(max){
  //  return Math.floor(Math.random() * max) + 1;
  //}
  //  generateRandomInteger(10); this will return a random number between
  // 0 and 10. Learn more about generating random numbers here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  const diceNumber = document.querySelector("#diceNumber");
  const diceButton = document.querySelector("#rollDice");
  const diceOutput = document.querySelector("#diceOutput");

  diceButton.addEventListener("click", function () {
    //"diceNumber" is our max
    const randomNumber = Math.floor(Math.random() * diceNumber.value) + 1;
    // set "diceOuput" text to the random number we just created.
    diceOutput.textContent = randomNumber;
  });
});
