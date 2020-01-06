import React, { useContext } from "react";
import UTILS from "SHARED/utils.js";
import { s } from "./";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { 
	ACTIONS,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
import Link from "COMPONENTS/Link/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

function renderPagination(data){
	const pagination = data.map(renderPaginationLink);	

	return (
		<ol 
			className={ s.pagination }
			id="episodes__pagination"
		>
			{ pagination }
		</ol> 
	);
}// renderPagination

function renderPaginationLink(data, index){
	// CONTEXT
	// --------------------------
	const { 
		state: {
			activeIndex,
			overlayActive 
		},
		dispatch
	} = useContext(Episodes);

	const {
		open: isNavOpen
	} = useContext(Nav).state;

	const {
		isLarge
	} = useContext(Client).state;

	// CLICK HANDLER
	// --------------------------
	function setActiveIndex(){
		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: index
		});
	}// changeEpisode

	// RENDER
	// --------------------------
	const { 
		number: episodeNo,
		title
	} = data;

	const episodeId = UTILS.convertToSafeString(title, "-");

	const isActive 	= index === activeIndex;

	//calculate the distance from activeIndex for formatting
	let opacity = 0;
	if(isActive) opacity = 1;
	else {
		const startingOpacity = isLarge ? 0.45 : 0.8;
		const decayDistance   = isLarge ? 15 : 5;
		const decayRate       = 1/decayDistance;
		const fadeOffset      = Math.abs(index - activeIndex);
		
		opacity = startingOpacity - (fadeOffset * decayRate);
	}
	
	const offset = index - activeIndex;
	
	let translate, factor;
	if(isLarge){ //vertically aligned on desktop only
		translate   = "translateY";
		factor      = 2;
	} else { 
		translate   = "translateX";
		factor      = 1.25;
	}

	const translation = `${factor * offset}em`;

	const isHidden = (isNavOpen || opacity <= 0);

	let style = undefined;
	if(!isHidden){
		style = {
			transform: `${translate}(${translation})`,
			opacity
		};
	}

	const tabIndex = overlayActive || isNavOpen ? -1 : 0; 

	return (
		<li 
			className={ `${s.item} ${isActive ? s.active : s.inactive}` }
			aria-current={ isActive }
			aria-hidden={ isHidden }
			key={ `episode__pagination__${episodeNo}` }
			style={ style }
		>
			<button 
				className={ s.paginationLink }
				onClick={ setActiveIndex }
				tabIndex={ tabIndex }
			>
				{ episodeNo }
			</button>
		</li>
	);	
}// renderPaginationLink

export default {
	pagination: renderPagination
};
