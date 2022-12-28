document.addEventListener("DOMContentLoaded", function () {
  // cookie clicker
  const cookie = document.querySelector("#cookie");
  const counter = document.querySelector("#counter");
  cookie.addEventListener("click", function () {
    counter.textContent++;
  });

  // magnify text
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

  //Change background color
  const body = document.querySelector("body");
  const colorPicker = document.querySelector("#greenScreenColor");
  const colorPickerButton = document.querySelector("#greenScreenButton");
  colorPickerButton.addEventListener("click", function () {
    //make case insensitive
    colorPicker.value = colorPicker.value.toLowerCase();
    body.style.backgroundColor = colorPicker.value;
  });

  /* Crane Game */
  const craneImage = document.querySelector("#craneImage");
  const leftButton = document.querySelector("#leftButton");
  const rightButton = document.querySelector("#rightButton");
  const upButton = document.querySelector("#upButton");
  const downButton = document.querySelector("#downButton");

  leftButton.addEventListener("click", function () {
    //make image relative to parent
    craneImage.style.position = "relative";
    const currentLeft = parseInt(window.getComputedStyle(craneImage).left);
    //move image left
    craneImage.style.left = `${currentLeft - 10}px`;
  });
  rightButton.addEventListener("click", function () {
    craneImage.style.position = "relative";
    const currentRight = parseInt(window.getComputedStyle(craneImage).left);
    console.log(currentRight);
    craneImage.style.left = `${currentRight + 10}px`;
  });
  upButton.addEventListener("click", function () {
    craneImage.style.position = "relative";
    const currentUp = parseInt(window.getComputedStyle(craneImage).top);
    craneImage.style.top = `${currentUp - 10}px`;
  });
  downButton.addEventListener("click", function () {
    craneImage.style.position = "relative";
    const currentDown = parseInt(window.getComputedStyle(craneImage).top);
    craneImage.style.top = `${currentDown + 10}px`;
  });
});
