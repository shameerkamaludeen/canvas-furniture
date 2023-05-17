/* || Component - Decor texture underline
		 ======================================================================== */

export default function addDecorTUAnimation() {
	var decorUnderlines = document.querySelectorAll('.decor-texture-underline');

	if (typeof (decorUnderlines) == 'undefined' || decorUnderlines == null) {
		return;
	}

	// Animate decor-texture-underline on page load
	animateDecorTU(decorUnderlines);

	// Window scroll event
	window.addEventListener('scroll', () => {
		animateDecorTU(decorUnderlines);
	});
}

function animateDecorTU(decorUnderlines) {
	for (const decorUnderline of decorUnderlines) {
		const windowHeight = window.innerHeight;
		// get distance from the top of the viewport
		const elementTop = decorUnderline.getBoundingClientRect().top;
		if (elementTop < windowHeight) {
			decorUnderline.classList.add('decor-tu-animate');
		}
	}
}