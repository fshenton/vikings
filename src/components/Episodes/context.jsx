import React, { createContext, useReducer } from "react";
import reducer from "./";
import { data } from "./";

const EpisodesContext = createContext();

const initialState = {
	activeIndex: 0,
	overlayActive: false,
	episodeCount: data.length
}

function EpisodesProvider(props){
	const { children } = props;

	const episodeCount = data.length;
	const [state, dispatch] = useReducer(reducer, initialState);
 
	return (
		<EpisodesContext.Provider value={ {state, dispatch} }>
			{ children }
		</EpisodesContext.Provider>
	);
}// EpisodesProvider

export { EpisodesContext, EpisodesProvider };