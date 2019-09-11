import React from "react";
import { ACTIONS } from "./";

export default function reducer(state, action){
	const {
		type, 
		value
	} = action;

	switch(type){
		case ACTIONS.NEXT_EPISODE:
			return {
				...state,
				activeIndex: state.activeIndex+1
			}
		case ACTIONS.PREV_EPISODE:
			return {
				...state,
				activeIndex: state.activeIndex-1
			}
		case ACTIONS.SET_ACTIVE_INDEX:
			return {
				...state,
				activeIndex: value
			}
		case ACTIONS.SET_OVERLAY_ACTIVE:
			return {
				...state,
				overlayActive: value
			}
		default:
			throw new Error("Invalid action requested.");
			break;
	}
}
