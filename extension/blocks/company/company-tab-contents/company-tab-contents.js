/* || Block - company with tab contents
	 ========================================================================== */

import { animateOnScroll } from '../../../../scripts/utilities.js'

export { default as addRowFullWidthTabsEvents } from '../../../components/tab/row-full-width-tabs/row-full-width-tabs.js';
export { default as animateCounters } from '../../../components/counter/counters-splitter-tag/counters-splitter-tag.js';
// animate company image
export function animateCTCImage() {
	const companyImg = document.getElementById('companyTCImg');
	if (typeof (companyImg) == 'undefined' || companyImg == null) {
		return;
	}
	if (!companyImg.classList.contains('ctc-img-animate')) {
		animateOnScroll(companyImg, (elem = companyImg) => {
			elem.classList.add('ctc-img-animate');
		});
	}
}
