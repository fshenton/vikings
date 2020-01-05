import React, { createContext, useReducer } from "react";
import { reducer } from "./";

const NavContext = createContext();

const initialState = {
	open: false
};

function NavProvider(props){
	const { children } = props;

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<NavContext.Provider value={ {state, dispatch} }>
			{ children }
		</NavContext.Provider>
	);
}// NavProvider

export {
	NavContext, 
	NavProvider
};
