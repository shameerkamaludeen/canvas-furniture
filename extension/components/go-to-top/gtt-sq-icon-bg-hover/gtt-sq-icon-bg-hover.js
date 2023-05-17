/* || Component - Go to top square icon background hover
	 ========================================================================== */
import { tabletView } from '../../../../scripts/variables.js';

export default function addGotoTopEvents() {
	const gotoTopElem = document.querySelector('.gtt-sq-icon-bg-hover');

	if (typeof (gotoTopElem) == 'undefined' || gotoTopElem == null) {
		return;
	}
	gotoTopElem.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	window.addEventListener('scroll', () => {
		if (document.documentElement.clientWidth >= tabletView) {
			if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
				gotoTopElem.classList.add('gtt-sq-ibh-active');
				gotoTopElem.classList.remove('gtt-sq-ibh-inactive');
			} else {
				gotoTopElem.classList.remove('gtt-sq-ibh-active');
				gotoTopElem.classList.add('gtt-sq-ibh-inactive');
			}
		}
	});
}