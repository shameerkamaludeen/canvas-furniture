/* || Component - Subscribe paragraph email form
	 ========================================================================== */

export default function addSubscribePEFormEvents() {
	const formSubscribtionElem = document.querySelector('.form-email-subscribe-sl');
	if (typeof (formSubscribtionElem) == 'undefined' || formSubscribtionElem == null) {
		return;
	}
	const inputEmailElem = formSubscribtionElem.querySelector('.form-ess-input-email');

	formSubscribtionElem.setAttribute('novalidate', '');
	inputEmailElem.addEventListener('input', () => {
		if (inputEmailElem.validity.valid) {
			inputEmailElem.classList.remove('form-ess-ie-error');
		}
	});

	inputEmailElem.addEventListener('blur', () => {
		if (inputEmailElem.value.trim().length > 0 && !inputEmailElem.validity.valid) {
			inputEmailElem.classList.add('form-ess-ie-error');
		}
	});

	formSubscribtionElem.addEventListener('submit', (event) => {
		if (!inputEmailElem.validity.valid) {
			event.preventDefault();
			inputEmailElem.classList.add('form-ess-ie-error');
		}
	});
}