import React, { createContext, useReducer } from "react";

const Characters   = createContext();
const initialState = {
	activeIndex: 0
};

function CharactersProvider(props){

	const { children } = props;

	return(
		<Characters.Provider value={initialState}>
			{children}
		</Characters.Provider>
	);
}//CharactersProvider

export { CharactersProvider, Characters };