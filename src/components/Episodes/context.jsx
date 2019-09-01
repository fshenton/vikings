import React, { createContext } from "react";

const Episodes = createContext();

const initialState = {
	activeIndex: 0
};

function EpisodesProvider(props){
	const { children } = props;

	return (
		<Episodes.Provider value={ initialState }>
			{ children }
		</Episodes.Provider>
	);
}

export { Episodes, EpisodesProvider };