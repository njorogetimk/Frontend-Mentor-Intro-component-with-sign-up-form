const form = document.querySelector(".form");
const firstNameElement = document.querySelector("#first-name");
const secondNameElement = document.querySelector("#second-name");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

const checkInputs = () => {
  const firstName = firstNameElement.value.trim();
  const secondName = secondNameElement.value.trim();
  const email = emailElement.value.trim();
  const password = passwordElement.value;

  if (firstName === "") {
    // show error message
    showErrorMessage(firstNameElement, "First Name cannot be empty");
  }
  if (secondName === "") {
    // show error message
    showErrorMessage(secondNameElement, "Second Name cannot be empty");
  }
  if (email === "") {
    // show error message
    showErrorMessage(emailElement, "Email cannot be empty");
  } else if (!validateEmail(email)) {
    // Show error message
    showErrorMessage(emailElement, "Looks like this is not an email");
    emailElement.className = "error";
  }

  if (password === "") {
    //show error message
    showErrorMessage(passwordElement, "Password cannot be empty");
  }
};

function showErrorMessage(input, message) {
  const formControlElement = input.parentElement;
  const small = formControlElement.querySelector("small");
  small.innerText = message;

  formControlElement.className = "form-control error";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
