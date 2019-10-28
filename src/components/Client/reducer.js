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

			const isSmall = width < tabletStart;
			const isMedium = width >= tabletStart && width < desktopStart;
			const isLarge = width >= desktopStart; 

			return {
				...state,
				isSmall,
				isMedium,
				isLarge
			};
		default:
			throw new Error("Invalid action used.")
			break;
	}	
}
