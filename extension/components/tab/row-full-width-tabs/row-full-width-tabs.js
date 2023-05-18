/* || Components - Row direction full width tabs
	 ========================================================================== */

// Add tab events
export default function addRowFullWidthTabsEvents() {
	// selecting the block itself
	const rowFullWidthTabsElem = document.getElementById('rowFullWidthTabs');
	if (typeof (rowFullWidthTabsElem) == 'undefined' || rowFullWidthTabsElem == null) return;
	// finding all tab elements
	const tabElems = rowFullWidthTabsElem.querySelectorAll('.btn-no-bg-border');
	for (const tabElem of tabElems) {
		tabElem.addEventListener('click', function () {

			// removing all active class on tab and adding on the current active tab
			for (const item of tabElems) {
				item.classList.remove('row-fwt-tab-active');
			}
			tabElem.classList.add('row-fwt-tab-active');

			const fwtTabSelector = `.row-fwt-content[data-fwt-content='${tabElem.getAttribute('data-fwt-tab')}']`;

			// removing all active class and adding active class on content based on 
			// the active tab
			rowFullWidthTabsElem.querySelector('.row-fwt-content').classList.remove('row-fwt-content-active');

			rowFullWidthTabsElem.querySelector(fwtTabSelector).classList.add('row-fwt-content-active');
		});
	}
}