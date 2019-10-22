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
			const desktopStart = 1200;

			return {
				...state,
				isSmall:  width < tabletStart,
				isMedium: width >= tabletStart && width < desktopStart,
				isLarge: width >= desktopStart
			};
		default:
			throw new Error("Invalid action used.")
			break;
	}	
}
