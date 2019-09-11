import React, { createContext, useState } from "react";


const Characters   = createContext();

const initialState = {
	activeIndex: 0
};

function CharactersProvider(props){

	const { children } = props;

	const [ activeIndex, setActiveIndex ] = useState(initialState.activeIndex);

	return(
		<Characters.Provider value={ { activeIndex, setActiveIndex } }>
			{ children }
		</Characters.Provider>
	);
}// CharactersProvider

export { CharactersProvider, Characters };
