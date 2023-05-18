/* || Component - Form radiused
	 ========================================================================== */

const contactMFForm = document.getElementById('contactMFForm');

export default function addFormRadiusedEvents() {
	contactMFForm.setAttribute('novalidate', '');

	contactMFForm.addEventListener('submit', function (event) {
		if (!contactMFFormValidation(this)) {
			const globalErrorMsgElem = this.querySelector('.form-rd-global-errormsg');
			globalErrorMsgElem.classList.add('form-rd-g-errormsg-active');
			globalErrorMsgElem.textContent = 'Some error occured, please check and try again.';
			event.preventDefault();
		};
	});
}

function contactMFFormValidation(contactMFFormElem) {
	let isContactMFFormValid = true;
	// Name (text)
	const nameElem = contactMFFormElem.querySelector('#name');
	if (!nameElem.validity.valid) {
		if (nameElem.validity.valueMissing || nameElem.value.trim() === '') {
			nameElem.nextElementSibling.textContent = 'Name required!';
		}
		nameElem.nextElementSibling.classList.add('form-rd-errormsg-active');
		nameElem.classList.add('form-rd-input-text-error');
		isContactMFFormValid = false;
	} else {
		nameElem.nextElementSibling.classList.remove('form-rd-errormsg-active');
		nameElem.classList.remove('form-rd-input-text-error');
	}

	// email (email)
	const emailElem = contactMFFormElem.querySelector('#email');
	if (!emailElem.validity.valid) {
		if (emailElem.validity.valueMissing || emailElem.value.trim() === '') {
			emailElem.nextElementSibling.textContent = 'Email required!';
		} else if (emailElem.validity.typeMismatch) {
			emailElem.nextElementSibling.textContent = 'Email not valid!';
		}
		emailElem.nextElementSibling.classList.add('form-rd-errormsg-active');
		emailElem.classList.add('form-rd-input-email-error');
		isContactMFFormValid = false;
	} else {
		nameElem.nextElementSibling.classList.remove('form-rd-errormsg-active');
		nameElem.classList.remove('form-rd-input-email-error');
	}

	return isContactMFFormValid;
}
