import React, { useContext, useEffect, useState } from "react";
import { 
	data,
	ACTIONS,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { s, RENDER } from "./";

export default function EpisodesNav(){
	
	// CONTEXT
	// -------------------------------
	const {
		state: {
			activeIndex,
			episodeCount,
			overlayActive
		},
		dispatch
	} = useContext(Episodes);

	const {
		open: isNavOpen
	} = useContext(Nav).state;

	const { 
		isSmall,
		isMedium, 
		isLarge
	} = useContext(Client).state;

	// STATE AND EFFECTS

	const [active, setActive] = useState(false);

	useEffect(fireTransition, []);

	function fireTransition() {
		const delay = setTimeout(() => {
			setActive(true);
		}
		, 200);

		return () => clearTimeout(delay);
	}// fireTransition

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

	const bottomPagination = isSmall || isMedium;
	const sidePagination = isLarge;

	const isHidden = isNavOpen || overlayActive;
	const tabIndex = isHidden ? -1 : 0;

	return (
		<nav 
			className={ `${s.wrapper} ${active ? s.visible : s.invisible}` } 
			aria-hidden={ isHidden }>
			<div className={ s.container }>
				<button
					className={ `${s.button} ${s.prev}` }
					aria-label="Previous episode."
					aria-controls="episodes__items episodes__pagination"
					aria-hidden={ isFirstEpisodeActive || isHidden }
					onClick={ prevEpisode }
					tabIndex={ tabIndex }
				>
					<span className={ s.icon }/>
				</button>
				<button 
					className={ `${s.button} ${s.next}` }
					aria-label="Next episode." 
					aria-controls="episodes__items episodes__pagination"
					aria-hidden={ isLastEpisodeActive || isHidden }
					onClick={ nextEpisode }
					tabIndex={ tabIndex }
				>
					<span className={ s.icon }/>
				</button>
				{ bottomPagination && pagination }				
			</div> 
			{ sidePagination && pagination }
		</nav>
	);
}// EpisodesNav
