import React, { createContext } from "react";
import { data } from "./";

const EpisodesContext = createContext();

const episodes = data.length;

const initialState = {
	activeIndex: 0,
	episodeCount: episodes
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