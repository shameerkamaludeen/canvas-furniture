/* || Component - Form email subscribe singleline
	 ========================================================================== */

export default function addFormEmailSubscribeEvents() {
	const formSubscribtionElem = $('.form-email-subscribe-sl');
	if (!formSubscribtionElem.length) return;
	const inputEmailElem = formSubscribtionElem.find('.form-ess-input-email');

	formSubscribtionElem.attr('novalidate', '');
	inputEmailElem.on('input', () => {
		if (inputEmailElem[0].validity.valid) {
			inputEmailElem.removeClass('form-ess-ie-error');
		}
	});

	inputEmailElem.on('blur', () => {
		if (inputEmailElem.val().trim().length > 0 && !inputEmailElem[0].validity.valid) {
			inputEmailElem.addClass('form-ess-ie-error');
		}
	});

	formSubscribtionElem.on('submit', (event) => {
		if (!inputEmailElem[0].validity.valid) {
			event.preventDefault();
			inputEmailElem.addClass('form-ess-ie-error');
		}
	});
}