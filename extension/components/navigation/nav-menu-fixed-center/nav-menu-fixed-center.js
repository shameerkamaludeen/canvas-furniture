/* || Component - Nav menu fixed center
	 =========================================================================== */

import { laptopView } from '../../../../scripts/variables.js';

const ddMenuItemElems = $('[data-drop-down]');
const menuWrapperElem = $('.nm-fc-menu-wr');

function addNavMenuFCEvents() {
	if (!menuWrapperElem.length) return;

	// Click event for drop down buttons
	ddMenuItemElems.each(function () {
		const ddMenuItemElem = $(this);
		// Menu functioning for smaller devices
		if (document.documentElement.clientWidth < laptopView) {
			const ddBtnElem = ddMenuItemElem.find('.nm-fc-mi-li-btn');
			ddBtnElem.on('click', () => {
				const ddElem = ddMenuItemElem.find('[data-submenu-active]').filter(':first');
				if (ddElem.attr('data-submenu-active') === 'false') {
					// Close any parallel menu active
					const parentMenuItemElem = ddMenuItemElem.parent();
					const activeMenuItemElem = parentMenuItemElem.find('[data-submenu-active="true"]');
					if (activeMenuItemElem.length) {
						closeDropDownMenuItem(activeMenuItemElem.parent());
					}
					ddElem.attr('data-submenu-active', 'true');
					ddBtnElem.addClass('nm-fc-mi-li-btn-active');
					ddMenuItemElem.find('.nm-fc-mi-link-icon').addClass('nm-fc-mi-li-active');
				}
				else {
					closeDropDownMenuItem(ddMenuItemElem);
				}
				updateMenuItemsHeight(menuWrapperElem);
				// Initial height is total menu items height without its submenu
				const initialHeight = menuWrapperElem.find('>:first-child').children().length * 50;
				// Require to update menu container height seperately
				menuWrapperElem.css('max-height', `${initialHeight + getMenuTotalHeight(menuWrapperElem) + 20}px`);
			});
		}

		// Menu functioning for larger devices
		// To work drop down menus there should only two child element one for menu 
		// item link and another for drop down 
		if (document.documentElement.clientWidth >= laptopView) {
			const ddElem = ddMenuItemElem.find('>:last-child');
			ddMenuItemElem.on('mouseover', () => {
				ddElem.css('max-height', `${ddElem.find('>:first-child').outerHeight() + 20}px`);
			});
			ddMenuItemElem.on('mouseleave', () => {
				ddElem.css('max-height', '');
			});
		}
	});
}

function closeDropDownMenuItem(ddMenuItemElem) {
	ddMenuItemElem.find('[data-submenu-active]').attr('data-submenu-active', 'false');
	ddMenuItemElem.find('.nm-fc-mi-li-btn').removeClass('nm-fc-mi-li-btn-active');
	ddMenuItemElem.find('.nm-fc-mi-link-icon').removeClass('nm-fc-mi-li-active');
	const subMenuDDElem = ddMenuItemElem.find('[data-submenu-active="true"]');
	if (subMenuDDElem.length) {
		closeDropDownMenuItem(subMenuDDElem.parent());
	}
}

function updateMenuItemsHeight(menuItemElem) {
	// The complex selector used here because to select only single level of sub menu
	const ddMenuItemWrapperElem = menuItemElem.find('>:first-child');
	const subMenuItemElems = $(ddMenuItemWrapperElem[0].querySelectorAll(':scope > [data-drop-down] > [data-submenu-active]'));
	subMenuItemElems.each(function () {
		const subMenuItemElem = $(this);
		updateMenuItemsHeight(subMenuItemElem);
		if (subMenuItemElem.attr('data-submenu-active') === 'true') {
			// Initial height is total menu items height without its submenu
			const initialHeight = subMenuItemElem.find('>:first-child').children().length * 50;
			console.log(`${initialHeight + getMenuTotalHeight(subMenuItemElem) + 20}px`);
			subMenuItemElem.css('max-height', `${initialHeight + getMenuTotalHeight(subMenuItemElem) + 20}px`);
		} else {
			subMenuItemElem.css('max-height', '0px');
		}
	});
}

function getMenuTotalHeight(activeMenuElem) {
	let totalHeight = 0;
	const activeSubMenuElems = activeMenuElem.find('[data-submenu-active="true"]');
	activeSubMenuElems.each(function () {
		const activeSubMenuElem = $(this);
		totalHeight += getMenuTotalHeight(activeSubMenuElem);
		totalHeight += activeSubMenuElem.find('>:first-child').outerHeight();
	})
	return totalHeight;
}

// 1. Use this only if search option is using, and changes require based on the 
// search component is using.
function AddMenuCloseOnSearchEvent() {
	if (document.documentElement.clientWidth < laptopView) {
		const searchBtnElem = $('.search-close-btn-trans-bg');

		if (!searchBtnElem.length) return;
		const hcTbgBtn = $('.hc-btn-tbg-button');
		const menuWrapperElem = $('.nm-fc-menu-wr');

		searchBtnElem.on('click', () => {
			if (hcTbgBtn.attr('data-buttontype') == 'close') {
				menuWrapperElem.css('max-height', '');
				hcTbgBtn.attr('data-buttontype', 'menu');
				hcTbgBtn.attr('tittle', 'Menu');
				// Changing icon
				hcTbgBtn.find('>:first-child').toggleClass('hc-btn-tbg-icon-inactive');
				hcTbgBtn.find('>:last-child').toggleClass('hc-btn-tbg-icon-inactive');
			}
		});
	}
}

export { addNavMenuFCEvents, AddMenuCloseOnSearchEvent };