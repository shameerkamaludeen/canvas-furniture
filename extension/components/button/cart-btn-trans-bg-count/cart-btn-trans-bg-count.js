/* || Component - Cart button with transparent background and  cart count
	 ========================================================================== */

export default function addCartBtnClickEvent() {
	const cartBtnElem = $('.cart-btn-trans-bg-count');
	if (!cartBtnElem.length) return;
	cartBtnElem.on('click', () => {
		const cartWrapperElem = $('.cart-fh-overlay-bg');
		const overlayElem = $('.cart-fh-obg-overlay');
		const cartElem = $('.cart-fh-obg-cart');

		cartWrapperElem.toggleClass('cart-fh-obg-active');
		cartWrapperElem.toggleClass('cart-fh-obg-inactive');
		overlayElem.addClass('cart-fh-obg-overlay-active');
		cartElem.addClass('cart-fh-obg-cart-active');
		document.body.classList.toggle('overflow-hidden');
	});
}