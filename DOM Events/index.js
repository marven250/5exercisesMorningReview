document.addEventListener("DOMContentLoaded", function () {
  const cookie = document.querySelector("#cookie");
  const counter = document.querySelector("#counter");
  console.log(cookie);
  cookie.addEventListener("click", function () {
    counter.textContent++;
  });
});
