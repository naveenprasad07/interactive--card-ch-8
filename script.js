const inputNumber = document.getElementById("input-number");
const inputName = document.getElementById("input-name");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const inputCvc = document.getElementById("input-cvc");
const cardNumber = document.getElementById("number");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const cardCvc = document.getElementById("cvc");
const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");
const done = document.querySelector(".thank-you");
const continueBtn = document.querySelector(".thank-you button");

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value.replaceAll("-", " "));
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function format(s) {
  return s.toString().replace(/\d(4)(?=.)/g, "$&");
}

inputNumber.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  if (value.length > 16) {
    value = value.slice(0, 16); // Limit the length to 16 digits
  }

  // Format the value into groups of 4 digits separated by dashes
  let formattedValue = value.match(/.{1,4}/g)?.join("-") || "";

  e.target.value = formattedValue;
});

inputNumber.addEventListener("keyup", setCardNumber);
inputMonth.addEventListener("keyup", setCardMonth);
inputYear.addEventListener("keyup", setCardYear);
inputCvc.addEventListener("keyup", setCardCvc);
inputName.addEventListener("keyup", setCardName);

function handleSubmit(e) {
  e.preventDefault();

  if (!inputName.value) {
    inputName.classList.add("error");
    inputName.parentElement.classList.add("error-message");
  } else {
    inputName.classList.remove("error");
    inputName.parentElement.classList.remove("error-message");
  }

  if (!inputNumber.value) {
    inputNumber.classList.add("error");
    inputNumber.parentElement.classList.add("error-message");
  } else if (inputNumber.value.length < 16) {
    inputNumber.classList.add("error");
  } else {
    inputNumber.classList.remove("error");
    inputNumber.parentElement.classList.remove("error-message");
  }

  if (!inputMonth.value) {
    inputMonth.classList.add("error");
    inputMonth.parentElement.classList.add("error-message");
  } else {
    inputMonth.classList.remove("error");
    inputMonth.parentElement.classList.remove("error-message");
  }
  if (!inputYear.value) {
    inputYear.classList.add("error");
    inputYear.parentElement.classList.add("error-message");
  } else {
    inputYear.classList.remove("error");
    inputYear.parentElement.classList.remove("error-message");
  }
  if (!inputCvc.value) {
    inputCvc.classList.add("error");
    inputCvc.parentElement.classList.add("error-message");
  } else {
    inputCvc.classList.remove("error");
    inputCvc.parentElement.classList.remove("error-message");
  }
  if (
    inputName.value &&
    inputNumber.value &&
    inputMonth.value &&
    inputYear.value &&
    inputCvc.value &&
    inputNumber.value.length == 16
  ) {
    console.log("Iam also there");
    done.classList.remove("hidden");
    form.classList.add("hidden");
  }
}

window.addEventListener("submit", handleSubmit);

continueBtn.addEventListener("click", function () {
  inputName.textContent =
    inputNumber.textContent =
    inputMonth.textContent =
    inputYear.textContent =
    inputCvc.textContent =
      "";
  done.classList.add("hidden");
  form.classList.remove("hidden");
});
