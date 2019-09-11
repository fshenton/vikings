import React, { useContext } from "react";
import { 
	data,
	ACTIONS,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
import { s, RENDER } from "./";

export default function EpisodesNav(){
	
	// CONTEXT
	// -------------------------------
	const {
		state: {
			activeIndex,
			episodeCount
		},
		dispatch
	} = useContext(Episodes);


	// RENDER
	// -------------------------------
	const isFirstEpisodeActive = activeIndex === 0;
	const isLastEpisodeActive  = activeIndex === episodeCount - 1;

	const pagination = data.map(RENDER.pagination);
	

	// CLICK HANDLER
	// -------------------------------
	function changeEpisode(newIndex, e){
		e.preventDefault();

		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: newIndex
		});
	}// changeEpisode

	const prevEpisode = changeEpisode.bind(this, activeIndex - 1);
	const nextEpisode = changeEpisode.bind(this, activeIndex + 1);

	return (
		<nav>
			<button 
				className={ s.navButton }
				aria-label="Previous episode."
				aria-controls="episodes__items episodes__pagination"
				aria-hidden={ isFirstEpisodeActive }
				onClick={ prevEpisode }
			/>
			<button 
				className={ s.navButton }
				aria-label="Next episode." 
				aria-controls="episodes__items episodes__pagination"
				aria-hidden={ isLastEpisodeActive }
				onClick={ nextEpisode }
			/>
			<ol id="episodes__pagination">
				{ pagination }
			</ol>
		</nav>
	);
}// EpisodesNav
