/* || Component - Description list icon all open
	 ========================================================================== */

export default function addDLIconOpenAllevents() {
	const dataTermElems = $('.dl-ioa-dt');

	dataTermElems.each(function () {
		const dataTermElem = $(this);
		dataTermElem.on('click', () => {
			const iconCtrElem = dataTermElem.find('.dl-ioa-dt-icon-ctr');
			const dataDescElem = dataTermElem.next();

			if (dataDescElem.hasClass('dl-ioa-dd-active')) {
				dataDescElem.removeClass('dl-ioa-dd-active');
				dataDescElem.css('max-height', '');
			} else {
				dataDescElem.addClass('dl-ioa-dd-active');
				dataDescElem.css('max-height', `${dataDescElem.find('>:first-child').outerHeight() + 20}px`);
			}

			iconCtrElem.find('>:first-child').toggleClass('dl-ioa-dt-icon-active');
			iconCtrElem.find('>:last-child').toggleClass('dl-ioa-dt-icon-active');
		});
	});
}