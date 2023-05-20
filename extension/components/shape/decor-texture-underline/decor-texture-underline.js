/* || Component - Decor texture underline
		 ======================================================================== */

export default function addDecorTUAnimation() {
	var decorUnderlines = $('.decor-texture-underline');
	if (!decorUnderlines.length) return;

	// Animate decor-texture-underline on page load
	animateDecorTU(decorUnderlines);

	// Window scroll event
	window.addEventListener('scroll', () => {
		animateDecorTU(decorUnderlines);
	});
}

function animateDecorTU(decorUnderlines) {
	decorUnderlines.each(function () {
		const decorUnderline = $(this);
		const windowHeight = window.innerHeight;
		// get distance from the top of the viewport
		const elementTop = decorUnderline[0].getBoundingClientRect().top;
		if (elementTop < windowHeight) {
			decorUnderline.addClass('decor-tu-animate');
		}
	});
}