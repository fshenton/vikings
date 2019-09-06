import React, { createContext, useState } from "react";
import { data } from "./";

const EpisodesContext = createContext();

const initialState = {
	activeIndex: 0,
	overlayActive: false
}


function EpisodesProvider(props){
	const { children } = props;

	const episodeCount = data.length;
	const [activeIndex, setActiveIndex] = useState(initialState.activeIndex);
	const [overlayActive, setOverlayActive] = useState(initialState.overlayActive);

	const state = {
		episodeCount,
		activeIndex,
		setActiveIndex,
		overlayActive,
		setOverlayActive 
	};
 
	return (
		<EpisodesContext.Provider value={ state }>
			{ children }
		</EpisodesContext.Provider>
	);
}// EpisodesProvider

export { EpisodesContext, EpisodesProvider };