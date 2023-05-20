/* || Block - FAQ centered open all
	 ========================================================================== */


export default function addFAQEvents() {
	$('.faq-coa-dt').each(function () {
		const dataTermElem = $(this);
		dataTermElem.on('click', function () {
			const iconCtrElem = dataTermElem.find('.faq-coa-dt-icon-ctr');
			const dataDescElem = dataTermElem.next();

			if (dataDescElem.hasClass('faq-coa-dd-active')) {
				dataDescElem.removeClass('faq-coa-dd-active');
				dataDescElem.css('max-height', '');
			} else {
				dataDescElem.addClass('faq-coa-dd-active');
				dataDescElem.css("max-height", `${dataDescElem.find('>:first-child').outerHeight() + 20}px`);
				// dataDescElem.css("max-height", `${dataDescElem.firstElementChild.offsetHeight + 20}px`);
			}

			iconCtrElem.find('>:first-child').toggleClass('faq-coa-dt-icon-active');
			iconCtrElem.find('>:last-child').toggleClass('faq-coa-dt-icon-active');
		});
	});
}