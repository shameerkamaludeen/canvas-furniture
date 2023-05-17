/* || Block - Cart full height overlay background
	 ========================================================================== */

export default function addShopingCartCloseEvent() {
	const cartWrapperElem = document.querySelector('.cart-fh-overlay-bg');
	if (typeof (cartWrapperElem) == 'undefined' || cartWrapperElem == null) {
		return;
	}
	const overlayElem = cartWrapperElem.querySelector('.cart-fh-obg-overlay');
	const cartElem = cartWrapperElem.querySelector('.cart-fh-obg-cart');

	overlayElem.addEventListener('click', function () {
		this.classList.remove('cart-fh-obg-overlay-active');
		cartElem.classList.remove('cart-fh-obg-cart-active');
		document.body.classList.toggle('overflow-hidden');

		// The time duration should be match with the animation time
		setTimeout(() => {
			cartWrapperElem.classList.toggle('cart-fh-obg-inactive');
			cartWrapperElem.classList.toggle('cart-fh-obg-active');
		}, 400);
	});
}