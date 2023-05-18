/* || Block - Price overlaped cards with centered content
	 ========================================================================== */

import { animateOnScroll } from '../../../../scripts/utilities.js';

// animate prices
export default function animatePrices() {
	const priceOCCPriceWrElem = document.getElementById('priceOCCPriceWr');
	if (typeof (priceOCCPriceWrElem) == 'undefined' || priceOCCPriceWrElem == null) {
		return;
	}
	const priceElems = priceOCCPriceWrElem.querySelectorAll('.price-occ-price');
	for (const priceElem of priceElems) {
		if (!priceElem.classList.contains('price-occ-price-animate')) {
			animateOnScroll(priceElem, (elem = priceElem) => {
				elem.classList.add('price-occ-price-animate');
			});
		}
	}
}