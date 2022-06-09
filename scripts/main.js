
/* --Menu code start-- */
const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.menu-controls .close-button');
const navMenu = document.querySelector('header .nav-menu');

// Click event for close button
closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Click event for Hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
});


// closing menu on clicking outside of the manu
document.addEventListener('click', e => {
    if (navMenu.classList.contains('active')) {

        // get the bubbled elements to check wheather the click is on menu element
        const elements = e.composedPath();
        let isClickedMenu = false;

        // checking the click is on or inside the menu container
        if (document.documentElement.clientWidth <= 1024) {
            // here the 'elements.length - 2' is for ignoring last two element (document and window) 
            for (let index = 0; index < elements.length - 2; index++) {
                if (elements[index].classList.contains('menu-wrapper') || elements[index].classList.contains('hamburger')) {
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
});
