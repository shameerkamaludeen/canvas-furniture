/* || Component - Hamburger close button transparent background
	 =========================================================================== */

export default function addHamburgerCloseTBGEvents() {
	const hcTbgBtn = document.querySelector('.hc-btn-tbg-button');
	// The element in which the active or inactive class require
	const menuWrapperElem = document.querySelector('.nm-fc-menu-wr');

	if (typeof (hcTbgBtn) == 'undefined' || hcTbgBtn == null) {
		return;
	}

	// Click event to activate or deactivate menu
	hcTbgBtn.addEventListener('click', () => {
		if (hcTbgBtn.getAttribute('data-buttontype') == 'menu') {
			// menuWrapperElem.classList.remove('nm-fc-menu-wr-vh');
			menuWrapperElem.style.maxHeight = `${menuWrapperElem.firstElementChild.offsetHeight + 20}px`;
			hcTbgBtn.setAttribute('data-buttontype', 'close');
			hcTbgBtn.setAttribute('tittle', 'Close');
			// Changing icon
			hcTbgBtn.firstElementChild.classList.toggle('hc-btn-tbg-icon-inactive');
			hcTbgBtn.lastElementChild.classList.toggle('hc-btn-tbg-icon-inactive');
		} else if (hcTbgBtn.getAttribute('data-buttontype') == 'close') {
			menuWrapperElem.style.removeProperty('max-height');
			hcTbgBtn.setAttribute('data-buttontype', 'menu');
			hcTbgBtn.setAttribute('tittle', 'Menu');
			// Changing icon
			hcTbgBtn.firstElementChild.classList.toggle('hc-btn-tbg-icon-inactive');
			hcTbgBtn.lastElementChild.classList.toggle('hc-btn-tbg-icon-inactive');
		}
	});
}