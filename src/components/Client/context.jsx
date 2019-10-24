import React, { createContext, useReducer, useEffect } from "react";
import { 
	ClientContext as Client,
	ACTIONS, 
	reducer 
} from "./";
import UTILS from "SHARED/utils.js";

const initialState = {
	isSmall:  true, //default 
	isMedium: false,
	isLarge: false,
	// NOT IMPLEMENTED YET
	// isTouch: false,
	// hasGyro: false,
	// is4G: false,
	// isChrome: false,
	// isEdge: false,
	// isSafari: false,
	// isFirefox: false
};

const ClientContext = createContext();


function ClientProvider(props){

	const { children } = props;

	const [state, dispatch] = useReducer(reducer, initialState);

	function updateResizeListeners(){
		window.addEventListener("resize", syncViewSize);
		return () => {
			window.removeEventListener("resize", syncView)
		};
	}// updateResizeListeners


	function syncViewSize(){
		dispatch({
			type: ACTIONS.UPDATE_VIEW_SIZE
		});
	}// syncViewSize


	// EFFECTS
	// ------------------------

	//set device dimensions on mount
	useEffect(syncViewSize, []); 

	//add/remove resize listeners
	useEffect(updateResizeListeners, []);

	return (
		<ClientContext.Provider value={ { state, dispatch } }>
			{ children }
		</ClientContext.Provider>
	);
}

export {
	ClientContext,
	ClientProvider
};
