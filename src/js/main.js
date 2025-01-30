var button = document.querySelector(".button");

document.querySelector(".like").addEventListener("click", function () {
  this.classList.add("active");

  setTimeout(() => {
    this.classList.remove("active");
  }, 2000);
});

var number = document.querySelector(".number");
var add = document.querySelector(".add");

function addNumber() {
  var value = number.innerText;
  number.innerText = parseInt(value) + 1;
}

add.addEventListener("click", addNumber);
