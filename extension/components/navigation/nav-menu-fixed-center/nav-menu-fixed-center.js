/* || Component - Nav menu fixed center
	 =========================================================================== */

	 import { laptopView } from '../../../../scripts/variables.js';

	 const ddMenuItemElems = document.querySelectorAll('[data-drop-down]');
	 const menuWrapperElem = document.querySelector('.nm-fc-menu-wr');
	 
	 function addNavMenuFCEvents() {
	 
		 if (typeof (menuWrapperElem) == 'undefined' || menuWrapperElem == null) {
			 return;
		 }
		 // Click event for drop down buttons
		 for (const ddMenuItemElem of ddMenuItemElems) {
	 
			 // Menu functioning for smaller devices
			 if (document.documentElement.clientWidth < laptopView) {
				 const ddBtnElem = ddMenuItemElem.querySelector('.nm-fc-mi-li-btn');
				 ddBtnElem.addEventListener('click', () => {
					 const ddElem = ddMenuItemElem.querySelector('[data-submenu-active]');
					 if (ddElem.getAttribute('data-submenu-active') === 'false') {
						 // Close any parallel menu active
						 const parentMenuItemElem = ddMenuItemElem.parentElement;
						 const activeMenuItemElem = parentMenuItemElem.querySelector('[data-submenu-active="true"]');
						 if (activeMenuItemElem) {
							 closeDropDownMenuItem(activeMenuItemElem.parentElement);
						 }
						 ddElem.setAttribute('data-submenu-active', 'true');
						 ddBtnElem.classList.add('nm-fc-mi-li-btn-active');
						 ddMenuItemElem.querySelector('.nm-fc-mi-link-icon').classList.add('nm-fc-mi-li-active');
					 }
					 else {
						 closeDropDownMenuItem(ddMenuItemElem);
					 }
					 updateMenuItemsHeight(menuWrapperElem);
					 // Initial height is total menu items height without its submenu
					 const initialHeight = menuWrapperElem.firstElementChild.childElementCount * 50;
					 // Require to update menu container height seperately
					 menuWrapperElem.style.maxHeight = `${initialHeight + getMenuTotalHeight(menuWrapperElem) + 20}px`;
				 });
			 }
	 
			 // Menu functioning for larger devices
			 // To work drop down menus there should only two child element one for menu 
			 // item link and another for drop down 
			 if (document.documentElement.clientWidth >= laptopView) {
				 const ddElem = ddMenuItemElem.lastElementChild;
				 ddMenuItemElem.addEventListener('mouseover', () => {
					 ddElem.style.maxHeight = `${ddElem.firstElementChild.offsetHeight + 20}px`;
				 });
				 ddMenuItemElem.addEventListener('mouseleave', () => {
					 ddElem.style.removeProperty('max-height');
				 });
			 }
		 }
	 }
	 
	 function closeDropDownMenuItem(ddMenuItemElem) {
		 ddMenuItemElem.querySelector('[data-submenu-active]').setAttribute('data-submenu-active', 'false');
		 ddMenuItemElem.querySelector('.nm-fc-mi-li-btn').classList.remove('nm-fc-mi-li-btn-active');
		 ddMenuItemElem.querySelector('.nm-fc-mi-link-icon').classList.remove('nm-fc-mi-li-active');
		 const subMenuDDElem = ddMenuItemElem.querySelector('[data-submenu-active="true"]');
		 if (subMenuDDElem) {
			 closeDropDownMenuItem(subMenuDDElem.parentElement);
		 }
	 }
	 
	 function updateMenuItemsHeight(menuItemElem) {
		 // The complex selector used here because to select only single level of sub menu
		 const ddMenuItemWrapperElem = menuItemElem.firstElementChild;
		 const subMenuItemElems = ddMenuItemWrapperElem.querySelectorAll(':scope > [data-drop-down] > [data-submenu-active]');
		 for (const subMenuItemElem of subMenuItemElems) {
			 updateMenuItemsHeight(subMenuItemElem);
			 if (subMenuItemElem.getAttribute('data-submenu-active') === 'true') {
				 // Initial height is total menu items height without its submenu
				 const initialHeight = subMenuItemElem.firstElementChild.childElementCount * 50;
				 subMenuItemElem.style.maxHeight = `${initialHeight + getMenuTotalHeight(subMenuItemElem) + 20}px`;
			 } else {
				 subMenuItemElem.style.maxHeight = '0px';
			 }
		 }
	 }
	 
	 function getMenuTotalHeight(activeMenuElem) {
		 let totalHeight = 0;
		 const activeSubMenuElems = activeMenuElem.querySelectorAll('[data-submenu-active="true"]');
		 for (const activeSubMenuElem of activeSubMenuElems) {
			 totalHeight += getMenuTotalHeight(activeSubMenuElem);
			 totalHeight += activeSubMenuElem.firstElementChild.offsetHeight;
		 }
		 return totalHeight;
	 }
	 
	 // 1. Use this only if search option is using, and changes require based on the 
	 // search component is using.
	 function AddMenuCloseOnSearchEvent() {
		 if (document.documentElement.clientWidth < laptopView) {
			 const searchBtnElem = document.querySelector('.search-close-btn-trans-bg');
	 
			 if (typeof (searchBtnElem == 'undefined') || searchBtnElem == null) {
				 return;
			 }
			 const hcTbgBtn = document.querySelector('.hc-btn-tbg-button');
			 const menuWrapperElem = document.querySelector('.nm-fc-menu-wr');
	 
			 searchBtnElem.addEventListener('click', () => {
				 if (hcTbgBtn.getAttribute('data-buttontype') == 'close') {
					 menuWrapperElem.style.removeProperty('max-height');
					 hcTbgBtn.setAttribute('data-buttontype', 'menu');
					 hcTbgBtn.setAttribute('tittle', 'Menu');
					 // Changing icon
					 hcTbgBtn.firstElementChild.classList.toggle('hc-btn-tbg-icon-inactive');
					 hcTbgBtn.lastElementChild.classList.toggle('hc-btn-tbg-icon-inactive');
				 }
			 });
		 }
	 }
	 
	 export { addNavMenuFCEvents, AddMenuCloseOnSearchEvent };