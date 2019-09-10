import React, { useContext } from "react";
import { 
	data,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
import { s, RENDER } from "./";

export default function EpisodesNav(){

	// CONTEXT
	// -------------------------------
	const {
		get: {
			episodeCount,
			activeIndex
		},
		set: {
			activeIndex: setActiveIndex
		}
	} = useContext(Episodes);


	// RENDER
	// -------------------------------
	const isFirstEpisodeActive = activeIndex === 0;
	const isLastEpisodeActive  = activeIndex === episodeCount - 1;

	const pagination = data.map(RENDER.pagination);
	

	// CLICK HANDLER
	// -------------------------------
	function handleNavPressed(e, newIndex){
		e.preventDefault();

		setActiveIndex(newIndex);
	}// handleNavPressed

	return (
		<nav>
			<button 
				className={ s.navButton }
				aria-label="Previous episode."
				aria-controls="episodes__items episodes__pagination"
				aria-hidden={ isFirstEpisodeActive }
				onClick={ (e) => { 
					handleNavPressed(e, activeIndex - 1) 
				}}
			/>
			<button 
				className={ s.navButton }
				aria-label="Next episode." 
				aria-controls="episodes__items episodes__pagination"
				aria-hidden={ isLastEpisodeActive }
				onClick={ (e) => { 
					handleNavPressed(e, activeIndex + 1) 
				}}
			/>
			<ol id="episodes__pagination">
				{ pagination }
			</ol>
		</nav>
	);
}// EpisodesNav
