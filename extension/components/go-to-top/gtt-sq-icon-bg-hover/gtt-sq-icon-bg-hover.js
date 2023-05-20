/* || Component - Go to top square icon background hover
	 ========================================================================== */
import { tabletView } from '../../../../scripts/variables.js';

export default function addGotoTopEvents() {
	const gotoTopElem = $('.gtt-sq-icon-bg-hover');

	if (!gotoTopElem.length) return;
	gotoTopElem.on('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	window.addEventListener('scroll', () => {
		if (document.documentElement.clientWidth >= tabletView) {
			if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
				gotoTopElem.addClass('gtt-sq-ibh-active');
				gotoTopElem.removeClass('gtt-sq-ibh-inactive');
			} else {
				gotoTopElem.removeClass('gtt-sq-ibh-active');
				gotoTopElem.addClass('gtt-sq-ibh-inactive');
			}
		}
	});
}