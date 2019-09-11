import React, { createContext, useReducer } from "react";
import { 
	reducer, 
	data
} from "./";


// EPISODES CONTEXT
// ----------------------------
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


// TRAILER CONTEXT
// ------------------------------
const TrailersContext = createContext();

function TrailersProvider(props){
	const {
		children,
		value: {
			prevTrailer,
			nextTrailer
		}
	} = props;

	return (
		<TrailersContext.Provider value={ { prevTrailer, nextTrailer } }>
			{ children }
		</TrailersContext.Provider>
	);
}// TrailersProvider


export { 
	EpisodesContext,
 	EpisodesProvider,
 	TrailersContext,
 	TrailersProvider 
};