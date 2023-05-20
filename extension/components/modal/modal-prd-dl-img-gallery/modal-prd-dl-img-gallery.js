/* || Component - Modal product description list image gallery
	 ========================================================================== */

export default function addModalProductDIGEvents() {
	const modalProductDIG = $('#modalProductDIG');
	if (!modalProductDIG.length) return;
	modalProductDIG.find('.modal-prd-dl-ig-close-btn').on('click', () => {
		modalProductDIG.toggleClass('modal-prd-dl-ig-active');
		document.body.classList.toggle('overflow-hidden');
	});
}