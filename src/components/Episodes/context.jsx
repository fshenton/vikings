import React, { createContext } from "react";

const EpisodesContext = createContext();

const initialState = {
	activeIndex: 0
};

function EpisodesProvider(props){
	const { children } = props;

	return (
		<EpisodesContext.Provider value={ initialState }>
			{ children }
		</EpisodesContext.Provider>
	);
}

export { EpisodesContext, EpisodesProvider };