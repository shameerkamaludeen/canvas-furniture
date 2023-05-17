/* || Component - Description list icon all open
	 ========================================================================== */

	 export default function addDLIconOpenAllevents() {
		const dataTermElems = document.querySelectorAll('.dl-ioa-dt');
	
		for (const dataTermElem of dataTermElems) {
			dataTermElem.addEventListener('click', () => {
				const iconCtrElem = dataTermElem.querySelector('.dl-ioa-dt-icon-ctr');
				const dataDescElem = dataTermElem.nextElementSibling;
	
				if (dataDescElem.classList.contains('dl-ioa-dd-active')) {
					dataDescElem.classList.remove('dl-ioa-dd-active');
					dataDescElem.style.removeProperty('max-height');
				} else {
					dataDescElem.classList.add('dl-ioa-dd-active');
					dataDescElem.style.maxHeight = `${dataDescElem.firstElementChild.offsetHeight + 20}px`;
				}
	
				iconCtrElem.firstElementChild.classList.toggle('dl-ioa-dt-icon-active');
				iconCtrElem.lastElementChild.classList.toggle('dl-ioa-dt-icon-active');
			});
		}
	}