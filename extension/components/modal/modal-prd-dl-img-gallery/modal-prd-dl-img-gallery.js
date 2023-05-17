/* || Component - Modal product description list image gallery
	 ========================================================================== */

export default function addModalProductDIGEvents() {
	const modalProductDIG = document.getElementById('modalProductDIG');
	if (typeof (modalProductDIG) == 'undefined' || modalProductDIG == null) {
		return;
	}
	const closeBtnElem = modalProductDIG.querySelector('.modal-prd-dl-ig-close-btn');
	closeBtnElem.addEventListener('click', () => {
		modalProductDIG.classList.toggle('modal-prd-dl-ig-active');
		document.body.classList.toggle('overflow-hidden');
	});
}