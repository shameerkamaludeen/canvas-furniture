/* || Component - Scroll to top button
	 ========================================================================== */

import { clientWidth, mobileLandscapeView } from '../../../../scripts/variables.js';

export default function activateScrollToTop() {
	const scrollToTopElem = document.getElementById('scrollToTop');
	if (typeof (scrollToTopElem) == 'undefined' || scrollToTopElem == null || clientWidth < mobileLandscapeView) return;
	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
		scrollToTopElem.classList.add('scroll-tt-btn-active');
	}

	scrollToTopElem.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}