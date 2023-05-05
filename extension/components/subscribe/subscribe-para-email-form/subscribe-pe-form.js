/* || Component - Subscribe paragraph email form
	 ========================================================================== */

export default function addSubscribePEFormEvents() {
	const formEmailSubscribeSLElem = document.querySelector('.form-email-subscribe-sl');
	const inputEmailElem = formEmailSubscribeSLElem.querySelector('.form-ess-input-email');
	if (typeof (formEmailSubscribeSLElem) == 'undefined' || formEmailSubscribeSLElem == null) {
		return;
	}
	formEmailSubscribeSLElem.setAttribute('novalidate', '');

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
}