const formElement = document.getElementById('form');
const inputContainers = formElement.querySelectorAll('.input-container');
const inputElements = document.querySelectorAll('.input-container input');
const errorMessageElements = document.querySelectorAll('form div ~ small');
const submitFormButton = document.querySelector('.form-container form button');

submitFormButton.addEventListener('click', function(event) {
  event.preventDefault();

  const isValidEmail = new RegExp(/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i);
  
  for(let i = 0; i < inputElements.length; i++) {
    if(!inputElements[i].value || inputElements[i].type === 'email' && !isValidEmail.test(inputElements[i].value)) {
      inputContainers[i].classList.add('error');
      errorMessageElements[i].classList.add('error');
    } else {
      inputContainers[i].classList.remove('error');
      errorMessageElements[i].classList.remove('error');
    }
  }

})
