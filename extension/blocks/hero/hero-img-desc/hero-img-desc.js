/* || Block - Hero image description
	 ========================================================================== */

import { animateOnScroll } from '../../../../scripts/utilities.js'

export default function animateHeroIDImage() {
	const heroIDImg = document.getElementById('heroIDImg');

	if (typeof (heroIDImg) == 'undefined' || heroIDImg == null) {
		return;
	}
	if (!heroIDImg.classList.contains('hero-id-img-animate')) {
		animateOnScroll(heroIDImg, (elem = heroIDImg) => {
			elem.classList.add('hero-id-img-animate');
		});
	}
}