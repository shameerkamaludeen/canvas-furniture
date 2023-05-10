/* || Block - FAQ centered open all
	 ========================================================================== */

export default function addFAQEvents() {
	const dataTermElems = document.querySelectorAll('.faq-coa-dt');

	for (const dataTermElem of dataTermElems) {
		dataTermElem.addEventListener('click', () => {
			const iconCtrElem = dataTermElem.querySelector('.faq-coa-dt-icon-ctr');
			const dataDescElem = dataTermElem.nextElementSibling;

			if (dataDescElem.classList.contains('faq-coa-dd-active')) {
				dataDescElem.classList.remove('faq-coa-dd-active');
				dataDescElem.style.removeProperty('max-height');
			} else {
				dataDescElem.classList.add('faq-coa-dd-active');
				dataDescElem.style.maxHeight = `${dataDescElem.firstElementChild.offsetHeight + 20}px`;
			}

			iconCtrElem.firstElementChild.classList.toggle('faq-coa-dt-icon-active');
			iconCtrElem.lastElementChild.classList.toggle('faq-coa-dt-icon-active');
		});
	}
}