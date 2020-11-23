const buttons = document.querySelectorAll('button');
const passInput = document.getElementById('pass');
const confirmInput = document.getElementById('confirm-pass');
const signUpBtn = document.querySelector('#register-form .btn');
const contactBtn = document.querySelector('#contact-form .btn');
const signInBtn = document.querySelector('#sign-in-form .btn');
const recoverBtn = document.querySelector('#recover-form .btn');
const subBtn = document.querySelector('#subscribe-form .btn');



buttons.forEach((btn) => { //remove reload from all buttons
    btn.addEventListener('click', (e) => {
        e.preventDefault();
    })
})

const signUp = () => {
    let valid = true;
    document.querySelectorAll('#register-form [required="required"]').forEach(input => {
        if (!input.checkValidity()) return valid = false
    })

    if (passInput.value !== confirmInput.value) {
        passInput.classList.add('bad-pass');
        confirmInput.classList.add('bad-pass');
        passInput.value = '';
        confirmInput.value = '';
        alert('Given passwords are different!');
        valid = false
    }

    if(valid) alert('Your account has been created!')
    else alert('Something went wrong :( Check again all fields.');
}

const sendMsg = () => {
    let valid = true;
    document.querySelectorAll('#contact-form [required="required"]').forEach(input => {
        if (!input.checkValidity()) return valid = false
    })
    if(valid) alert('Your message was sent!');
    else alert('Something went wrong :( Check again all fields.');
}

const signIn = () => {
    let valid = true;
    document.querySelectorAll('#sign-in-form [required="required"]').forEach(input => {
        if (!input.checkValidity()) return valid = false
    })
    if(valid) alert('You have been successfully logged in :)');
    else alert('Something went wrong :( Check again all fields.');
}

const recoverPass = () => {
    let valid = true;
    document.querySelectorAll('#recover-form [required="required"]').forEach(input => {
        if (!input.checkValidity()) return valid = false
    })
    if(valid) alert('Check your email to reset your password!');
    else alert('Something went wrong :( Check again all fields.');
}

const subscribtion = () => {
    let valid = true;
    document.querySelectorAll('#subscribe-form [required="required"]').forEach(input => {
        if (!input.checkValidity()) return valid = false
    })
    if(valid) alert('Thank you for your subscribtion! :)');
    else alert('Something went wrong :( Check again all fields.');
}



signUpBtn.addEventListener('click', signUp)
contactBtn.addEventListener('click', sendMsg)
signInBtn.addEventListener('click', signIn)
recoverBtn.addEventListener('click', recoverPass)
subBtn.addEventListener('click', subscribtion)

passInput.addEventListener('click', () => {
    passInput.classList.remove('bad-pass');
})

confirmInput.addEventListener('click', () => {
    confirmInput.classList.remove('bad-pass');
})