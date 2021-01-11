const formElement = document.getElementById('form');
const inputContainers = formElement.querySelectorAll('.input-container');
const inputElements = document.querySelectorAll('.input-container input');
const errorMessageElements = document.querySelectorAll('form div ~ small');
const submitFormButton = document.querySelector('.form-container form button');

submitFormButton.addEventListener('click', function(event) {
  event.preventDefault();
  const emailRegExp = new RegExp(/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i);

  inputElements.forEach( function (item, index) {
    const isValidEmail = emailRegExp.test(item.value);
    const itemTypeEmail = item.type === 'email' ?? false;

    if(!item.value || itemTypeEmail === !isValidEmail) {
      inputContainers[index].classList.add('error');
      errorMessageElements[index].classList.add('error');
    } else {
      inputContainers[index].classList.remove('error');
      errorMessageElements[index].classList.remove('error');
    }
  })

})