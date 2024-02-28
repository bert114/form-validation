const form = document.querySelector("form");
const body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name");
  const number = document.querySelector("#number");

  const handleINput = (elem, m) => {
    const box = elem.closest(".box");
    const err = elem.nextElementSibling;

    box.classList.add("warning");
    err.innerHTML = m;
  };

  const removeErr = (elem) => {
    const box = elem.closest(".box");
    const err = elem.nextElementSibling;

    err.innerHTML = "";
    box.classList.remove("warning");
  };

  if (name.value.length === 0) {
    handleINput(name, "name is required");
  } else if (/\d+/.test(name.value)) {
    handleINput(name, "name must be letters");
  } else if (name.value.length <= 4) {
    handleINput(name, "too short");
  } else if (name.value.length >= 20) {
    handleINput(name, "too long");
  } else {
    removeErr(name);
  }

  const numInput = number.value;
  if (numInput.length === 0) {
    handleINput(number, "number is required");
  } else if (/[a-zA-Z]+/.test(numInput)) {
    handleINput(number, "numbers only");
  } else if (numInput.length >= 20) {
    handleINput(number, "too long");
  } else if (numInput.length <= 4) {
    handleINput(number, "too short");
  } else {
    removeErr(number);
  }

  const cardName = document.querySelector("#card-name");
  const numbers = document.querySelector("#num");
  const date = document.querySelector("#date-text");
  const dateInput = document.querySelector("#date");
  cardName.innerHTML = name.value;
  numbers.innerHTML = number.value;
  date.innerHTML = dateInput.value;
});
