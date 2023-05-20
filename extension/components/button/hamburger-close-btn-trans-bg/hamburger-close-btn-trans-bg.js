/* || Component - Hamburger close button transparent background
	 =========================================================================== */

export default function addHamburgerCloseTBGEvents() {
	const hcTbgBtn = $('.hc-btn-tbg-button');
	if (!hcTbgBtn.length) return;
	// The element in which the active or inactive class require
	const menuWrapperElem = $('.nm-fc-menu-wr');

	// Click event to activate or deactivate menu
	hcTbgBtn.on('click', function () {
		if (hcTbgBtn.attr('data-buttontype') == 'menu') {
			// menuWrapperElem.classList.remove('nm-fc-menu-wr-vh');
			menuWrapperElem.css('max-height', `${menuWrapperElem.find('>:first-child').outerHeight(true) + 20}px`);
			hcTbgBtn.attr('data-buttontype', 'close');
			hcTbgBtn.attr('tittle', 'Close');
			// Changing icon
			hcTbgBtn.find('>:first-child').toggleClass('hc-btn-tbg-icon-inactive');
			hcTbgBtn.find('>:last-child').toggleClass('hc-btn-tbg-icon-inactive');
		} else if (hcTbgBtn.attr('data-buttontype') == 'close') {
			menuWrapperElem.css('max-height', '');
			hcTbgBtn.attr('data-buttontype', 'menu');
			hcTbgBtn.attr('tittle', 'Menu');
			// Changing icon
			hcTbgBtn.find('>:first-child').toggleClass('hc-btn-tbg-icon-inactive');
			hcTbgBtn.find('>:last-child').toggleClass('hc-btn-tbg-icon-inactive');
		}
	});
}