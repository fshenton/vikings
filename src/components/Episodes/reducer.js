export default function reducer(state, action){
	const {
		type, 
		value
	} = action;

	console.log("reducer called");

	switch(type){
		case actions.NEXT_EPISODE:
			return {
				...state,
				activeIndex: state.activeIndex+1
			}
		case actions.PREV_EPISODE:
			return {
				...state,
				activeIndex: state.activeIndex-1
			}
		case actions.SET_ACTIVE_INDEX:
			return {
				...state,
				activeIndex: value
			}
		case actions.SET_OVERLAY_ACTIVE:
			
			console.log("here");

			return {
				...state,
				overlayActive: value
			}
		default:
			throw new Error("Invalid action requested.");
			break;
	}
}
