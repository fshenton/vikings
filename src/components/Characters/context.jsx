import React, { createContext, useReducer } from "react";
import { reducer } from "./";

const CharactersContext = createContext();

const initialState = {
	activeIndex: 0
};

function CharactersProvider(props){

	const { children } = props;

	const [state, dispatch] = useReducer(reducer, initialState);

	return(
		<CharactersContext.Provider value={ { state, dispatch } }>
			{ children }
		</CharactersContext.Provider>
	);
}// CharactersProvider

export { 
	CharactersContext, 
	CharactersProvider 
};
