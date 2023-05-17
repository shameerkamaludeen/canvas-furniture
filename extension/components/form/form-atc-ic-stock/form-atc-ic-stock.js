/* || Component - Form add to cart input controls stock
	 ========================================================================== */

export default function addFormATCEvents() {
	const formATCElem = document.querySelector('.form-atc-ic-stock');
	if (typeof (formATCElem) == 'undefined' || formATCElem == null) {
		return;
	}
	const qtyElem = formATCElem.querySelector('#qty');
	const formATCNotifyElem = formATCElem.querySelector(".form-atc-ics-notif");
	const btnQtyIncreaseElem = formATCElem.querySelector('.form-atc-ics-qty-btn-ic');
	const btnQtyDecreaseElem = formATCElem.querySelector('.form-atc-ics-qty-btn-dc');

	formATCElem.setAttribute('novalidate', '');

	// Quantity input event
	qtyElem.addEventListener('input', () => {
		qtyValueChangeValidation(qtyElem, formATCNotifyElem);
	});

	btnQtyIncreaseElem.addEventListener('click', () => {
		qtyElem.value = (qtyElem.valueAsNumber + 1);
		qtyValueChangeValidation(qtyElem, formATCNotifyElem);
	});

	btnQtyDecreaseElem.addEventListener('click', () => {
		qtyElem.value = (qtyElem.valueAsNumber - 1);
		qtyValueChangeValidation(qtyElem, formATCNotifyElem);
	});

	// Form submit event
	formATCElem.addEventListener('submit', (event) => {
		if (!formATCFormValidation(qtyElem, formATCNotifyElem)) {
			event.preventDefault();
		}
	});
}

function qtyValueChangeValidation(qtyElem, formATCNotifyElem) {
	if (qtyElem.validity.valid) {
		// Removing validation error and resetting notify message
		if (qtyElem.classList.contains('form-atc-ics-qty-error')) {
			qtyElem.classList.remove('form-atc-ics-qty-error');
			formATCNotifyElem.classList.remove('form-atc-ics-notif-error');
			formATCNotifyElem.textContent = 'Only 3 stocks available';
		}
	} else {
		checkQtyValidationError(qtyElem, formATCNotifyElem);
	}
}

function formATCFormValidation(qtyElem, formATCNotifyElem) {
	if (!qtyElem.validity.valid) {
		checkQtyValidationError(qtyElem, formATCNotifyElem);
		return false;
	} else {
		return true;
	}
}

function checkQtyValidationError(qtyElem, formATCNotifyElem) {
	qtyElem.classList.add('form-atc-ics-qty-error');
	if (qtyElem.validity.valueMissing) {
		formATCNotifyElem.classList.add('form-atc-ics-notif-error');
		formATCNotifyElem.textContent = 'Please enter the quantity';
	} else if (qtyElem.validity.rangeOverflow) {
		formATCNotifyElem.classList.add('form-atc-ics-notif-error');
		formATCNotifyElem.textContent = 'Oops! stock unavailable';
	} else if (qtyElem.validity.rangeUnderflow) {
		formATCNotifyElem.classList.add('form-atc-ics-notif-error');
		formATCNotifyElem.textContent = 'Wrong quantity!';
	} else {
		formATCNotifyElem.classList.add('form-atc-ics-notif-error');
		formATCNotifyElem.textContent = 'Oops! something went wrong';
	}
}