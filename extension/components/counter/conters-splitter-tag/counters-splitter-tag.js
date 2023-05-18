/* || Components - Counters with splitter and tag
	 ========================================================================== */

import { animateOnScroll, animateValue } from '../../../../scripts/utilities.js';

// counter
let isCountersCaseAnimated = false;
let isCountersConsultantAnimated = false;
let isCountersCustomerAnimated = false;
let isCountersAwardAnimated = false;

// animate couters
export default function animateCounters() {
	const counterComponentElem = document.getElementById('countersSplitterTag');
	if (typeof (counterComponentElem) == 'undefined' || counterComponentElem == null) {
		return;
	}
	if (!isCountersCaseAnimated) {
		const casesElem = counterComponentElem.querySelector('.cst-counter-cases');
		animateOnScroll(casesElem, () => {
			animateValue(casesElem, 0, 267, 1500);
			isCountersCaseAnimated = true;
		});
	}

	if (!isCountersConsultantAnimated) {
		const consultantElem = counterComponentElem.querySelector('.cst-counter-consultant');
		animateOnScroll(consultantElem, () => {
			animateValue(consultantElem, 0, 173, 1500);
			isCountersConsultantAnimated = true;
		});
	}

	if (!isCountersAwardAnimated) {
		const customersElem = counterComponentElem.querySelector('.cst-counter-customers');
		animateOnScroll(customersElem, () => {
			animateValue(customersElem, 0, 875, 1500);
			isCountersAwardAnimated = true;
		});
	}

	if (!isCountersCustomerAnimated) {
		const awardsElem = counterComponentElem.querySelector('.cst-counter-awards');
		animateOnScroll(awardsElem, () => {
			animateValue(awardsElem, 0, 478, 1500);
			isCountersCustomerAnimated = true;
		});
	}
}