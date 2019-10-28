import { ACTIONS } from "./";

export default function reducer(state, action){
	const {
		type,
		value
	} = action;

	switch(type){
		case ACTIONS.OPEN_NAVIGATION:
			return {
				...state,
				open: value
			}
		default:
			throw new Error("Invalid action requested");
			break;
	}
}
