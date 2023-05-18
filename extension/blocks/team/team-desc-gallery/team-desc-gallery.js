/* || Block - Team with description and gallery
	 ========================================================================== */

import { animateOnScroll } from '../../../../scripts/utilities.js';

// animate team gallery
export default function animateTeamGallery() {
	const teamDGGalleryElem = document.getElementById('teamDGGallery');
	if (typeof (teamDGGalleryElem) == 'undefined' || teamDGGalleryElem == null) {
		return;
	}
	if (!teamDGGalleryElem.classList.contains('team-dg-gallery-animate')) {
		animateOnScroll(teamDGGalleryElem, (elem = teamDGGalleryElem) => {
			elem.classList.add('team-dg-gallery-animate');
		});
	}
}