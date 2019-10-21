import { ACTIONS }  from "./";
import UTILS from "SHARED/utils.js";

export default function reducer(state, action){

	const {
		type,
		value
	} = action;

	switch(type){
		case ACTIONS.UPDATE_VIEW_SIZE: 

			let width; //can be passed as value or grabbed from shared utils

			if(!value){
				const dimensions = UTILS.getDeviceDimensions(); // currently just using width
				width = dimensions["width"];
			}	
			else {
				width = value;
			}
			
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
