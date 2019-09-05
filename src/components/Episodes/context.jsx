import React, { createContext } from "react";
import { data } from "./";

const EpisodesContext = createContext();

const episodes = data.length;

const initialState = {
	activeIndex: 0,
	episodeCount: episodes,
	overlayActive: false
};

function setActiveIndex(index){
	console.log("Prev Index: " + initialState.activeIndex);
	initialState.activeIndex = index;
	console.log("New Index: " + initialState.activeIndex);
}// setActiveIndex

function setOverlayActive(active){
	console.log("Prev OverlayActive: " + initialState.overlayActive);
	initialState.overlayActive = active;
	console.log("New OverlayActive: " + initialState.overlayActive);
}// setOverlayActive

function EpisodesProvider(props){
	const { children } = props;

	return (
		<EpisodesContext.Provider value={ initialState }>
			{ children }
		</EpisodesContext.Provider>
	);
}// EpisodesProvider

export { EpisodesContext, setActiveIndex, setOverlayActive, EpisodesProvider };