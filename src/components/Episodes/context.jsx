import React, { createContext, useState } from "react";
import { data } from "./";

const EpisodesContext = createContext();


function EpisodesProvider(props){
	const { children } = props;

	const episodeCount = data.length;
	const [activeIndex, setActiveIndex] = useState(0);
	const [overlayActive, setOverlayActive] = useState(false);

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