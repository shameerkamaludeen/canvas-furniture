
/* --Menu code start-- */
const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.menu-controls .close-button');
const navMenu = document.querySelector('header .nav-menu');
let activeMenus = new Array();

// Window scroll event
window.addEventListener('scroll', () => {
    // Animate decor-underline 
    animateDecorUnderline();
});
// Animate decor-underline on page load
animateDecorUnderline();

function animateDecorUnderline() {
    var decorUnderlines = document.querySelectorAll('.decor-underline');
    for (const decorUnderline of decorUnderlines) {
        const windowHeight = window.innerHeight;
        const elementTop = decorUnderline.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            decorUnderline.classList.add('active');
        }
    }
}

// Document click
document.addEventListener('click', e => {
    // closing menu on clicking outside of the manu
    // get the bubbled elements to check wheather the click is on menu element
    const elements = e.composedPath();
    let isClickedMenu = false;

    if (navMenu.classList.contains('active')) {

        // checking the click is on or inside the menu container
        if (document.documentElement.clientWidth <= 1024) {
            // here the 'elements.length - 2' is for ignoring last two element (document and window) 
            for (let index = 0; index < elements.length - 2; index++) {
                if (elements[index].classList.contains('menu-wr') || elements[index].classList.contains('hamburger')) {
                    isClickedMenu = true;
                    break;
                }
            }

            // if not clicked on menu then changes to close the menu
            if (!isClickedMenu) {
                navMenu.classList.remove('active');
            }
        }
    }

    // closing search on clicking outside of it
    if (searchElement.classList.contains('active')) {
        // here the 'elements.length - 2' is for ignoring last two element (document and window) 
        for (let index = 0; index < elements.length - 2; index++) {
            if (elements[index].classList.contains('search-button') || elements[index].classList.contains('search-input')) {
                isClickedMenu = true;
                break;
            }
        }

        // if not clicked on search button or search input then changes to close the the search
        if (!isClickedMenu) {
            searchElement.classList.remove('active');
        }
    }
});

// Click event for Hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Search click event
const searchElement = document.querySelector('.search');
const searchButton = document.querySelector('.search .search-button');
searchButton.addEventListener('click', () => {
    searchElement.classList.add('active');
});

// Click event for caret to expand menu
const caretElements = document.querySelectorAll('header .caret');
for (const caretElement of caretElements) {
    caretElement.addEventListener('click', (event) => {
        const menuElement = caretElement.parentElement.parentElement;
        if (menuElement.classList.contains('active')) {
            if (menuElement.classList.contains('main-menu')) {
                removeActiveMenuClass(true);
            } else {
                removeActiveMenuClass(false);
            }
        } else {
            if (activeMenus !== null && typeof activeMenus !== 'undefined' && activeMenus.length > 0) {
                if (menuElement.classList.contains('main-menu')) {
                    removeActiveMenuClass(true);
                } else if (activeMenus.length > 1) {
                    removeActiveMenuClass(false);
                }
            }
            menuElement.classList.add('active');
            activeMenus.push(menuElement);
        }
    });
}

function removeActiveMenuClass(mainAndSubMenu) {
    if (mainAndSubMenu) {
        for (const activeMenu of activeMenus) {
            activeMenu.classList.remove('active');
        }
        activeMenus = new Array();
    } else {
        activeMenus[1].classList.remove('active');
        activeMenus.pop();
    }
}

// Shoping cart button click event to open cart
const cartButtonElement = document.querySelector('header .cart-button');
cartButtonElement.addEventListener('click', () => {
    const shopingCartElement = document.querySelector('.shoping-cart');
    shopingCartElement.setAttribute('transition-style', 'in:wipe:right');
    shopingCartElement.classList.add('active');
    const overlayElement = document.querySelector('.overlay');
    overlayElement.classList.remove('display-none');
    // scrolling body off
    document.getElementsByTagName('body')[0].classList.add('cart-active');
});

// Shoping cart block click event to close cart
const shopingCartElement = document.querySelector('.shoping-cart');
const overlayElement = document.querySelector('.overlay');
overlayElement.addEventListener('click', () => {
    shopingCartElement.setAttribute('transition-style', 'out:wipe:right');
    setTimeout(() => {
        shopingCartElement.classList.remove('active');
    }, 400);
    overlayElement.classList.add('display-none');
    // scrolling body on
    document.getElementsByTagName('body')[0].classList.remove('cart-active');
});

// Set no validate on browser
const form = document.querySelector('footer form');
form.setAttribute('novalidate', '');

// subscribe input validation
const subscribeEmail = document.querySelector('footer form input');
subscribeEmail.addEventListener('input', () => {
    if (subscribeEmail.validity.valid) {
        subscribeEmail.classList.remove('error');
    }
});

subscribeEmail.addEventListener('blur', () => {
    if (subscribeEmail.value.trim().length > 0 && !subscribeEmail.validity.valid) {
        subscribeEmail.classList.add('error');
    }
});

// to-top button click event
const toTopButton = document.querySelector('.to-top button');
toTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
