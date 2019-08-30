import React, { createContext } from "react";

/* //////////////////

	NOTE: 
	
	this isn't ready or even working yet; we have no way to
	manipulate the state - it's just to demonstrate how Consumers
	can access a context from a Provider through the useContext 
	hook.

/////////////////////*/

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
