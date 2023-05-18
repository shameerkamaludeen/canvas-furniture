/* || Component - Navbar responsive right menu
	 ========================================================================== */

export default function addNavbarResponsiveRMEvents() {

	// click event for hamburger or close button
	const navMenuTransElem = document.querySelector('.nm-fs-transparent-bg');
	if (typeof (navMenuTransElem) == 'undefined' || navMenuTransElem == null) return;
	navMenuTransElem.addEventListener('click', function () {

		// setting transparent background 
		this.classList.toggle('nm-fs-tbg-active');

		// activate menu
		document.querySelector('.nm-fs-menu').classList.toggle('nm-fs-menu-active');

		// toggle close and hamburger icon
		this.querySelector('.hc-btn-icon').classList.toggle("hc-btn-icon-inactive");

		// tittle changing based on the button type
		const hamburgerCloseBtn = this.querySelector('.hamburger-close-btn');
		if (hamburgerCloseBtn.getAttribute('data-buttontype') == 'menu') {
			hamburgerCloseBtn.setAttribute('data-buttontype', 'close');
			hamburgerCloseBtn.setAttribute('tittle', 'Close');

			// solve flex being spread over the other element
			this.parentElement.classList.toggle('nav-menu-fs-active');
		} else {
			hamburgerCloseBtn.setAttribute('data-buttontype', 'menu');
			hamburgerCloseBtn.setAttribute('tittle', 'Menu');

			// solve flex being spread over the other element
			setTimeout(() => {
				this.parentElement.classList.toggle('nav-menu-fs-active');
			}, 500);
		}
	});
}