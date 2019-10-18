import React, { createContext, useReducer } from "react";
import { reducer } from "./";
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
