const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email-address");
const phoneNumber = document.querySelector("#phone-number");
const companyName = document.querySelector("#company-name");
const formMessage = document.querySelector("#form-message");
const btnSubmit = document.querySelector("#btn-submit");

// pop-up label form
function handleInput(e, variable) {
  const { value } = e.target;
  if (value) {
    variable.classList.add("filed");
  } else {
    variable.classList.remove("filed");
  }
}
firstName.oninput = (e) => handleInput(e, firstName);
lastName.oninput = (e) => handleInput(e, lastName);
email.oninput = (e) => handleInput(e, email);
phoneNumber.oninput = (e) => handleInput(e, phoneNumber);
companyName.oninput = (e) => handleInput(e, companyName);
formMessage.oninput = (e) => handleInput(e, formMessage);

// cancel form submission without validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

// error
const setError = (element, message) => {
  const formItem = element.parentElement;
  const errorDisplay = formItem.querySelector(".error");

  errorDisplay.innerText = message;
  formItem.classList.add("error");
  formItem.classList.remove("success");
};
// success
const setSuccess = (element) => {
  const formItem = element.parentElement;
  const errorDisplay = formItem.querySelector(".error");

  errorDisplay.innerText = "";
  formItem.classList.add("success");
  formItem.classList.remove("error");
};
// email
const isValidEmail = (email) => {
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEmail.test(String(email).toLowerCase());
};
// phoneNumber
const isValidphoneNumber = (phoneNumber) => {
  const regphoneNumber =  /(^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\+[0-9]{1,3}\([0-9]{1,3}\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[0-9]{1,4}$)/;
  return regphoneNumber.test(String(phoneNumber).toLowerCase());
};
// validation
const validateInputs = () => {
  // we get the contents of the "input" into the variables without spaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const formMessageValue = formMessage.value.trim();

  // firstName
  if (firstNameValue === "") {
    setError(firstName, "First Name is required");
  } else if(firstNameValue.length > 10){
    setError(firstName, "Maximum 10 characters");
  }else{
    setSuccess(firstName);
  }

  // lastName
  if (lastNameValue === "") {
    setError(lastName, "Last Name is required");
  } else if(lastNameValue.length > 15){
    setError(lastName, "Maximum 15 characters");
  }else {
    setSuccess(lastName);
  }

  // email
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  // phoneNumber
  if (phoneNumberValue === "") {
    setError(phoneNumber, "Email is required");
  } else if (!isValidphoneNumber(phoneNumberValue)) {
    setError(phoneNumber, "Enter data in the specified format +38(xxx)xxx-xx-xx");
  }else{
    setSuccess(phoneNumber);
  }

  //formMessageValue
  if (formMessageValue === "") {
    setError(formMessage, "Comment is required");
  } else if(formMessageValue.length > 200){
    setError(formMessage, "Maximum 200 characters ");
  }else{
    setSuccess(formMessage);
  }
};

