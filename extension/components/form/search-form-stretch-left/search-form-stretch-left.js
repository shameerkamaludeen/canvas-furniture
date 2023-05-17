/* || Component - Search form stretch left
	 ========================================================================== */

export default function addSearchFormSLEvents() {
	const searchFormSLElem = document.querySelector('.search-form-stretch-left');
	if (typeof (searchFormSLElem) == 'undefined' || searchFormSLElem == null) {
		return;
	}
	const searchFormElem = searchFormSLElem.querySelector('.sf-sl-form');
	const searchCloseBtnElem = searchFormSLElem.querySelector('.sc-btn-tbg-button');
	const searchFormInputElem = searchFormElem.querySelector('.sf-sl-input-search');
	searchFormElem.setAttribute('novalidate', '');

	searchCloseBtnElem.addEventListener('click', () => {
		searchCloseBtnElem.firstElementChild.classList.toggle('sc-btn-tbg-icon-inactive');
		searchCloseBtnElem.lastElementChild.classList.toggle('sc-btn-tbg-icon-inactive');
		searchFormElem.classList.toggle('sf-sl-form-active');
		searchFormElem.classList.toggle('sf-sl-form-inactive');
	});

	searchFormElem.addEventListener('submit', (event) => {
		if (!searchFormInputElem.validity.valid) {
			event.preventDefault();
		}
	});
}