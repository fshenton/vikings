import React, { useContext } from "react";
import { 
	data,
	ACTIONS,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
import { ClientContext as Client } from "COMPONENTS/Client/";
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

	const { isSmall } = useContext(Client).state;

	// CLICK HANDLER
	// -------------------------------
	function setActiveIndex(newIndex, e){
		e.preventDefault();

		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: newIndex
		});
	}// changeEpisode

	const prevEpisode = setActiveIndex.bind(this, activeIndex - 1);
	const nextEpisode = setActiveIndex.bind(this, activeIndex + 1);

	// RENDER
	// -------------------------------
	const isFirstEpisodeActive = activeIndex === 0;
	const isLastEpisodeActive  = activeIndex === episodeCount - 1;
	
	const pagination = RENDER.pagination(data);

	return (
		<nav className={ s.wrapper }>
			<div className={ s.container }>
				<button 
					className={ `${s.button} ${s.prev}` }
					aria-label="Previous episode."
					aria-controls="episodes__items episodes__pagination"
					aria-hidden={ isFirstEpisodeActive }
					onClick={ prevEpisode }
				/>
				<button 
					className={ `${s.button} ${s.next}` }
					aria-label="Next episode." 
					aria-controls="episodes__items episodes__pagination"
					aria-hidden={ isLastEpisodeActive }
					onClick={ nextEpisode }
				/>
				{ isSmall && pagination }				
			</div> 
			{ !isSmall && pagination }
		</nav>
	);
}// EpisodesNav
