/* || Component - Form add to cart input controls stock
	 ========================================================================== */

export default function addFormATCEvents() {
	const formATCElem = $('.form-atc-ic-stock');
	if (!formATCElem.length) return;
	const qtyElem = formATCElem.find('#qty');
	const formATCNotifyElem = formATCElem.find(".form-atc-ics-notif");
	const btnQtyIncreaseElem = formATCElem.find('.form-atc-ics-qty-btn-ic');
	const btnQtyDecreaseElem = formATCElem.find('.form-atc-ics-qty-btn-dc');

	formATCElem.attr('novalidate', '');

	// Quantity input event
	qtyElem.on('input', () => {
		qtyValueChangeValidation(qtyElem, formATCNotifyElem);
	});

	btnQtyIncreaseElem.on('click', () => {
		qtyElem.val(qtyElem[0].valueAsNumber + 1);
		qtyValueChangeValidation(qtyElem, formATCNotifyElem);
	});

	btnQtyDecreaseElem.on('click', () => {
		qtyElem.val(qtyElem[0].valueAsNumber - 1);
		qtyValueChangeValidation(qtyElem, formATCNotifyElem);
	});

	// Form submit event
	formATCElem.on('submit', (event) => {
		if (!formATCFormValidation(qtyElem, formATCNotifyElem)) {
			event.preventDefault();
		}
	});
}

function qtyValueChangeValidation(qtyElem, formATCNotifyElem) {
	if (qtyElem[0].validity.valid) {
		// Removing validation error and resetting notify message
		if (qtyElem.hasClass('form-atc-ics-qty-error')) {
			qtyElem.removeClass('form-atc-ics-qty-error');
			formATCNotifyElem.removeClass('form-atc-ics-notif-error');
			formATCNotifyElem.val('Only 3 stocks available');
		}
	} else {
		checkQtyValidationError(qtyElem, formATCNotifyElem);
	}
}

function formATCFormValidation(qtyElem, formATCNotifyElem) {
	if (!qtyElem[0].validity.valid) {
		checkQtyValidationError(qtyElem, formATCNotifyElem);
		return false;
	} else {
		return true;
	}
}

function checkQtyValidationError(qtyElem, formATCNotifyElem) {
	qtyElem.addClass('form-atc-ics-qty-error');
	if (qtyElem[0].validity.valueMissing) {
		formATCNotifyElem.addClass('form-atc-ics-notif-error');
		formATCNotifyElem.val('Please enter the quantity');
	} else if (qtyElem[0].validity.rangeOverflow) {
		formATCNotifyElem.addClass('form-atc-ics-notif-error');
		formATCNotifyElem.val('Oops! stock unavailable');
	} else if (qtyElem[0].validity.rangeUnderflow) {
		formATCNotifyElem.addClass('form-atc-ics-notif-error');
		formATCNotifyElem.val('Wrong quantity!');
	} else {
		formATCNotifyElem.addClass('form-atc-ics-notif-error');
		formATCNotifyElem.val('Oops! something went wrong');
	}
}