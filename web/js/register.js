const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function checkNavbar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop >= 100) {
        navbar.style.backgroundColor = 'var(--color-4)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}

checkNavbar();
window.addEventListener('scroll', () => {
    checkNavbar();
});

hamburgerButton.addEventListener('click', (event) => {
    hamburgerMenu.style.top = '0px';
    event.stopPropagation()
    window.addEventListener('click', (event) => {
        hamburgerMenu.style.top = '-300px';
    });
});

window.addEventListener('resize', () => {
    hamburgerMenu.style.top = '-300px';
});

const searchButton = document.querySelector('.search-button');
const searchText = document.getElementById('search-text');
searchButton.addEventListener('click', () => {
    if (searchText.value.trim() != '') {
        alert(`Searching for: ${searchText.value.trim()}`);
    }
    searchText.value = '';
});

// =============================================================================================
// register

// tidak pakai regular expression

const registerFrom = document.getElementById('register-form');

registerFrom.addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    
    let hasError = false;

    const firstName = document.getElementById('first-name').value;
    if (firstName.trim() === '') {
        document.getElementById('first-name-error').textContent = 'First name is required.';
        hasError = true;
    }

    const surname = document.getElementById('surname').value;
    if (surname.trim() === '') {
        document.getElementById('surname-error').textContent = 'Surname is required.';
        hasError = true;
    }

    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required.';
        hasError = true;
    } else if (!email.includes('@')) {
        document.getElementById('email-error').textContent = 'Enter a valid email address! Email must contain an "@" symbol.';
        hasError = true;
    } else if (!email.includes('.')) {
        document.getElementById('email-error').textContent = 'Enter a valid email address! Email must contain a dot.';
        hasError = true;
    }

    const phone = document.getElementById('phone').value;
    if (phone.trim() === '') {
        document.getElementById('phone-error').textContent = 'Phone is required.';
        hasError = true;
    } else if (phone.trim().length < 12) {
        document.getElementById('phone-error').textContent = 'Enter a valid phone number! Phone must have at least 12 digits';
        hasError = true;
    }

    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        document.getElementById('password-error').textContent = 'Password is required.';
        hasError = true;
    } else if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
        hasError = true;
    }

    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword.trim() === '') {
        document.getElementById('confirm-password-error').textContent = 'Confirm password is required.';
        hasError = true;
    } else if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        hasError = true;
    }

    if (!hasError) {
        alert(`Registration successful!

Hello ${firstName} ${surname}, welcome to the JeniusAcademy!

For further information, it will be sent via this email "${email}" and SMS at this number "${phone}"!

Please remember the password you have entered, or you can select "forget password" to reset your password.

Don't forget to subscribe to our packages!

Enjoy:)`);

        registerFrom.reset();

    }

});
