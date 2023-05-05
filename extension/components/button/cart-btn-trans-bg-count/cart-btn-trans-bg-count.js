/* || Component - Cart button with transparent background and  cart count
	 ========================================================================== */

export default function addCartBtnClickEvent() {
	const cartBtnElem = document.querySelector('.cart-btn-trans-bg-count');
	if (typeof (cartBtnElem) == 'undefined' || cartBtnElem == null) {
		return;
	}
	cartBtnElem.addEventListener('click', () => {
		const cartWrapperElem = document.querySelector('.cart-fh-overlay-bg');
		const overlayElem = cartWrapperElem.querySelector('.cart-fh-obg-overlay');
		const cartElem = cartWrapperElem.querySelector('.cart-fh-obg-cart');

		cartWrapperElem.classList.toggle('cart-fh-obg-active');
		cartWrapperElem.classList.toggle('cart-fh-obg-inactive');
		overlayElem.classList.add('cart-fh-obg-overlay-active');
		cartElem.classList.add('cart-fh-obg-cart-active');
		document.body.classList.toggle('overflow-hidden');
	});
}