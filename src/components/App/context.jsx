import React, { createContext, useReducer } from "react";
import { reducer } from "./";
import UTILS from "SHARED/utils.js";

const w = UTILS.getDeviceWidth();
const h = UTILS.getDeviceHeight();

const initialState = {
	isSmall:  w < 768 ? true : false,
	isMedium: w >= 768 && w <= 1200 ? true : false,
	isLarge: w >= 1200 ? true : false,
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
