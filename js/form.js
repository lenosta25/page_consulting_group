const form ={
  firstName: document.querySelector('#first-name'),
  lastName: document.querySelector('#last-name'),
  email: document.querySelector('#email-address'),
  phoneNumber: document.querySelector('#phone-number'),
  companyName: document.querySelector('#company-name'),
  formMessage: document.querySelector('#form-message'),
  btnSubmit: document.querySelector('#btn-submit')
}
// pop-up label form
function handleInput(e, name){
  const{value} = e.target;
  if(value){
    form[name].classList.add('filed')
  }else{
    form[name].classList.remove('filed')
  }
}
form.firstName.oninput =(e)=>handleInput(e,'firstName');
form.lastName.oninput =(e)=>handleInput(e,'lastName');
form.email.oninput =(e)=>handleInput(e,'email');
form.phoneNumber.oninput =(e)=>handleInput(e,'phoneNumber');
form.companyName.oninput =(e)=>handleInput(e,'companyName');
form.formMessage.oninput =(e)=>handleInput(e,'formMessage');
