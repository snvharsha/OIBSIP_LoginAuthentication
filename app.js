const passwordInput1 = document.getElementById('loginPassword');
const userInput1 = document.getElementById('loginName');
let emailIcon1 = document.querySelector('.form-box .input-box .email-icon');
let lockIcon1 = document.getElementById('form-lock-icon');

const passwordInput2 = document.getElementById('registrationPassword');
const userInput2 = document.getElementById('registrationName');
let emailIcon2 = document.querySelector('.registration-box .input-box .email-icon');
let lockIcon2 = document.getElementById('registration-lock-icon');

const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopup=document.querySelector('#login-popup');
const iconClose=document.querySelector('.icon-close');

let usernames = [];
let emails = [];
let passwords = [];

function register() {
    let username = document.getElementById('NameofUser').value;
    let email = document.getElementById('registrationName').value;
    let password = document.getElementById('registrationPassword').value;

    if (username && email && password) {
        usernames.push(username);
        emails.push(email);
        passwords.push(password);
        alert('"Registration successful!"')
        // document.getElementById('message').innerText = ;
    } else {
        alert("Please fill in all fields.");
        // document.getElementById('message').innerText = "Please fill in all fields.";
    }
}

function login() {
  
    let email = document.getElementById('loginName').value;
    let password = document.getElementById('loginPassword').value;

    
    let emailIndex = emails.indexOf(email);
    let passwordIndex = passwords.indexOf(password);

    if (emailIndex > -1 && passwordIndex > -1 &&  emailIndex === passwordIndex) {
        alert("Login successful!");
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.display-container').style.display = 'flex';
        document.getElementById('message').innerHTML="WELCOME"
        // document.getElementById('message').innerText = "Login successful!";
    } else {
        document.querySelector('.container').style.display = 'flex';
        document.querySelector('.display-container').style.display = 'none';
        alert( "You don't have an account. Please register.");
        // document.getElementById('message').innerText = "You don't have an account. Please register.";
    }
}
registerLink.addEventListener('click', () => {
    container.classList.add('active')
});
loginLink.addEventListener('click', () => {
    container.classList.remove('active')
});
  loginPopup.addEventListener('click', () => {
    container.classList.add('active-popup')
});
 iconClose.addEventListener('click', () => {
    container.classList.remove('active-popup')
});

document.getElementById('login-popup').addEventListener('click', function () {
    document.querySelector('.display-container').style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
});

document.querySelector('.icon-close').addEventListener('click', function () {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.display-container').style.display = 'flex';
});

function toggleEmailIcon() {

    if (userInput1.validity.valid) {
        emailIcon1.innerHTML = '<i class="fa-solid fa-envelope"></i>';
        emailIcon1.classList.remove('invalid');
    } else {
        emailIcon1.innerHTML = '<i class="fa-solid fa-exclamation-circle" style="color:red;"></i>';
        emailIcon1.classList.add('invalid');
    }
    if (userInput2.validity.valid) {
        emailIcon2.innerHTML = '<i class="fa-solid fa-envelope"></i>';
        emailIcon2.classList.remove('invalid');
    }
    else {
        emailIcon2.innerHTML = '<i class="fa-solid fa-exclamation-circle" style="color:red;"></i>';
        emailIcon2.classList.add('invalid');
    }
}


function togglePasswordVisibility() {
    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text';
        lockIcon1.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
    } else {
        passwordInput1.type = 'password';
        lockIcon1.innerHTML = '<i class="fa-solid fa-lock"></i>';
    }
    if (passwordInput2.type === 'password') {
        passwordInput2.type = 'text';
        lockIcon2.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
    } else {
        passwordInput2.type = 'password';
        lockIcon2.innerHTML = '<i class="fa-solid fa-lock"></i>';
    }
}