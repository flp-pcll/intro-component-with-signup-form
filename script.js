//Initial data:
const form = document.getElementById('form');
const inputs = document.querySelectorAll('.form-item-input');


//Events:
form.addEventListener('submit', checkUserInfo);
inputs.forEach(elem => elem.addEventListener('focus', resetForm));


//Functions:
function checkUserInfo(event) {
    event.preventDefault();

    if(form.firstName.value == '') {
        showError(form.firstName, form.firstName.id);
    }

    if(form.lastName.value == '') {
        showError(form.lastName, form.lastName.id);
    }

    if(form.userEmail.value == '') {
        showError(form.userEmail, form.userEmail.id);
    } else {
        isEmail(form.userEmail, form.userEmail.value);
    }

    if(form.userPassword.value == '') {
        showError(form.userPassword, form.userPassword.id);
    }
}

function isEmail(elem, elemValue) {
    const re = /\S+@\S+\.\S+/;

    if(re.test(elemValue)) {
        console.log('email ok');
    } else {
        showError(elem, elem.id);
    }
}

function showError(elem, elemId) {
    elem.classList.add('error-alert-icon');
    elem.classList.add('error-border');

    const messageArea = document.getElementById(`${elemId}Error`);
    messageArea.style.display = 'block';

    if(elemId == 'userEmail') {
        elem.placeholder = 'example@example.com';
        elem.style.color = ' hsl(0, 100%, 74%)';
        console.log(elem);
    }
}

function resetForm(event) {
    const element = event.target;
    element.classList.remove('error-alert-icon'); 
    element.classList.remove('error-border');

    if(element.id == 'userEmail') {
        element.style.color = '#000';
    }

    const message = document.getElementById(`${element.id}Error`);
    message.style.display = 'none';
}