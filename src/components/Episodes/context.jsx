import React, { createContext, useState } from "react";
import { data } from "./";

const EpisodesContext = createContext();

const episodeCount = data.length;


function setActiveIndex(index){
	console.log("Prev Index: " + state.activeIndex);
	state.activeIndex = index;
	console.log("New Index: " + state.activeIndex);
}// setActiveIndex


function setOverlayActive(active){
	console.log("Prev OverlayActive: " + state.overlayActive);
	state.overlayActive = active;
	console.log("New OverlayActive: " + state.overlayActive);
}// setOverlayActive


function EpisodesProvider(props){
	const { children } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	const [overlayActive, setOverlayActive] = useState(false);

	return (
		<EpisodesContext.Provider value={{
			episodeCount,
			activeIndex,
			setActiveIndex,
			overlayActive,
			setOverlayActive 
		}}>
			{ children }
		</EpisodesContext.Provider>
	);
}// EpisodesProvider

export { EpisodesContext, EpisodesProvider };