import React, { createContext, useState } from "react";


const CharactersContext = createContext();

const initialState = {
	activeIndex: 0
};

function CharactersProvider(props){

	const { children } = props;

	const [ activeIndex, setActiveIndex ] = useState(initialState.activeIndex);

	const state = {
		get: {
			activeIndex
		},
		set: {
			activeIndex: setActiveIndex
		}
	};

	return(
		<CharactersContext.Provider value={ state }>
			{ children }
		</CharactersContext.Provider>
	);
}// CharactersProvider

export { CharactersProvider, CharactersContext };
