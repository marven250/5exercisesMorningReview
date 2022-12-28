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
});
