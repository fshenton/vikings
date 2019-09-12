import { ACTIONS } from "./";

export default function reducer(state, action){

	const {
		type,
		value
	} = action;

	switch(type){
		case ACTIONS.PREV_CHARACTER:
			return {
				...state, 
				activeIndex: state.activeIndex - 1
			}
		case ACTIONS.NEXT_CHARACTER:
			return {
				...state,
				activeIndex:  state.activeIndex + 1
			}
		case ACTIONS.GET_CHARACTER:
			console.log(value);	

			return {
				...state,
				activeIndex: value
			}
		default:
			throw new Error("Invalid action used.")
			break;
	}	
}

