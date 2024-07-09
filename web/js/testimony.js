const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const packageButton = document.querySelectorAll('.package-button');

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

packageButton.forEach((element) => {
    element.addEventListener('click', () => {
        window.location.href = `./subscription.html?data=${element.classList[1]}`;
    });
});

const searchButton = document.querySelector('.search-button');
const searchText = document.getElementById('search-text');
searchButton.addEventListener('click', () => {
    if (searchText.value.trim() != '') {
        alert(`Searching for: ${searchText.value.trim()}`);
    }
    searchText.value = '';
});