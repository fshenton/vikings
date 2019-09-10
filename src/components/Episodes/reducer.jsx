import React from "react";
import {NEXT_EPISODE, PREV_EPISODE, SET_OVERLAY_ACTIVE, SET_ACTIVE_INDEX} from "./";

export default function reducer(state, action){
	const {
		type, 
		value
	} = action;

	switch(type){
		case NEXT_EPISODE:
			return {
				...state,
				activeIndex: state.activeIndex+1
			}
		case PREV_EPISODE:
			return {
				...state,
				activeIndex: state.activeIndex-1
			}
		case SET_ACTIVE_INDEX:
			return {
				...state,
				activeIndex: value
			}
		case SET_OVERLAY_ACTIVE:
			return {
				...state,
				overlayActive: value
			}
		default:
			throw new Error("Invalid action requested.");
			break;
	}
}
