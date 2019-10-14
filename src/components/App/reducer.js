import { ACTIONS }  from "./";

export default function reducer(state, action){

	const {
		type,
		value
	} = action;

	switch(type){
		case ACTIONS.SET_SMALL:
			return {
				...state,
				isSmall: value;
			};
		case ACTIONS.SET_MEDIUM:
			return {
				...state,
				isMedium: value;
			};
		case ACTIONS.SET_LARGE:
			return {
				...state,
				isLarge: value;
			};
		case ACTIONS.SET_TOUCH:
			return {
				...state,
				isTouch: value;
			};
		case ACTIONS.SET_GYRO:
			return {
				...state,
				hasGyro: value;
			};
		case ACTIONS.SET_4G:
			return {
				...state,
				is4G: value;
			};
		default:
			throw new Error("Invalid action used.")
			break;
	}	
}
