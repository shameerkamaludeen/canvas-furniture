/* || Block - Cart full height overlay background
	 ========================================================================== */

export default function addShopingCartCloseEvent() {
	const cartWrapperElem = $('.cart-fh-overlay-bg');
	if (!cartWrapperElem.length) return;
	const overlayElem = cartWrapperElem.find('.cart-fh-obg-overlay');
	const cartElem = cartWrapperElem.find('.cart-fh-obg-cart');

	overlayElem.on('click', function () {
		$(this).removeClass('cart-fh-obg-overlay-active');
		cartElem.removeClass('cart-fh-obg-cart-active');
		document.body.classList.toggle('overflow-hidden');

		// The time duration should be match with the animation time
		setTimeout(() => {
			cartWrapperElem.toggleClass('cart-fh-obg-inactive');
			cartWrapperElem.toggleClass('cart-fh-obg-active');
		}, 400);
	});
}