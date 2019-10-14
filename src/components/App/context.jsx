import React, { createContext, useReducer } from "react";
import { reducer } from "./";

const initialState = {
	isSmall: false,
	isMedium: false,
	isLarge: false,
	isTouch: false,
	hasGyro: false,
	is4G: false,
	isChrome: false,
	isEdge: false,
	isSafari: false,
	isFirefox: false
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
