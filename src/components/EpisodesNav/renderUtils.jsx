import React, { useContext } from "react";
import { s } from "./";
import Link from "COMPONENTS/Link/";
import { 
	ACTIONS,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { ClientContext as Client } from "COMPONENTS/Client/";
import UTILS from "SHARED/utils.js";

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
}//renderPagination


function renderPaginationLink(data, index){

	// CONTEXT
	// --------------------------
	const { 
		state: {
			activeIndex 
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

	let opacity = 0;
	if(isActive) opacity = 1;
	else {
		const startingOpacity = 0.8;
		const decayDistance   = 5;
		const decayRate       = 1/decayDistance;
		const fadeOffset      = Math.abs(index - activeIndex);
		
		opacity = startingOpacity - (fadeOffset * decayRate);
	}
	
	const offset = index - activeIndex;
	
	let translate, factor;
	if(isLarge){
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

	return (
		<li 
			className={ `${s.item} ${isActive ? s.active : s.inactive}` }
			style={ style }
			key={ `episode__pagination__${episodeNo}` }
			aria-current={ isActive }
			aria-hidden={ isHidden }
		>
			<Link 
				destination={ `#${episodeId}` }
				className={ s.paginationLink }
				onClick={ setActiveIndex }
			>
				{ episodeNo }
			</Link>
		</li>
	);	
}// renderPaginationLink

export default {
	pagination: renderPagination
};