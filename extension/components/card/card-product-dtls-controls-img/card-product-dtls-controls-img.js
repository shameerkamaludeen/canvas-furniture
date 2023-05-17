/* || Component - Card product details controls image
	 ========================================================================== */

export default function addCardProductDCIEvents() {
	const quickViewBtnElems = document.querySelectorAll('.card-pd-ci-control-btn-qv');
	for (const quickViewBtnElem of quickViewBtnElems) {
		quickViewBtnElem.addEventListener('click', () => {
			const modalProductDIG = document.getElementById('modalProductDIG');
			modalProductDIG.classList.toggle('modal-prd-dl-ig-active');
			document.body.classList.toggle('overflow-hidden');
		});
	}
}