import { ACTIONS }  from "./";
import UTILS from "SHARED/utils.js";

export default function reducer(state, action){

	const {
		type,
		value
	} = action;

	switch(type){
		case ACTIONS.UPDATE_VIEW_SIZE: //Should be called if window is resized (not implemented)
			const w = UTILS.getDeviceWidth();
			const h = UTILS.getDeviceHeight();
			return {
				...state,
				isSmall:  w < 768 ? true : false,
				isMedium: w >= 768 && w <= 1200 ? true : false,
				isLarge: w >= 1200 ? true : false,
			};
		default:
			throw new Error("Invalid action used.")
			break;
	}	
}
