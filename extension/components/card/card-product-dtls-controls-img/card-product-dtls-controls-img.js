/* || Component - Card product details controls image
	 ========================================================================== */

export default function addCardProductDCIEvents() {
	$('.card-pd-ci-control-btn-qv').each(function () {
		$(this).on('click', () => {
			const modalProductDIG = $('#modalProductDIG');
			modalProductDIG.toggleClass('modal-prd-dl-ig-active');
			document.body.classList.toggle('overflow-hidden');
		});
	});
}