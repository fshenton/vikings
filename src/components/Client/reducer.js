import { ACTIONS }  from "./";
import UTILS from "SHARED/utils.js";

export default function reducer(state, action){
	const {
		type,
		value
	} = action;

	switch(type){
		case ACTIONS.UPDATE_VIEW_SIZE: 
			const { width } = UTILS.getDeviceDimensions(); // currently just using width
			
			const tabletStart = 768;
			const desktopStart = 1025;

			const isSmall = width < tabletStart;
			const isMedium = width >= tabletStart && width < desktopStart;
			const isLarge = width >= desktopStart; 

			return {
				...state,
				isSmall,
				isMedium,
				isLarge
			};
		case ACTIONS.SET_BROWSER:
			const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
			const isEdge = /Edge/.test(navigator.userAgent);
			const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
			const isFirefox = typeof InstallTrigger !== 'undefined';

			return {
				...state,
				isChrome,
				isEdge,
				isSafari,
				isFirefox
			};
		default:
			throw new Error("Invalid action used.")
			break;
	}	
}// reducer
