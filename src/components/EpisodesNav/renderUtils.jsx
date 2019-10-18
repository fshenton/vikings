import React, { useContext } from "react";
import { s } from "./";
import Link from "COMPONENTS/Link/";
import { 
	ACTIONS,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
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

	let opacity;
	if(isActive) opacity = 1;
	else {
		const decayDistance = 4;
		const decayRate     = 1/decayDistance;
		const fadeOffset    = Math.abs(index - activeIndex);
		
		opacity = 1 - (fadeOffset * decayRate);
	}
	
	const offset 	= index - activeIndex;
	
	let axis, factor;
	if(isLarge){
		axis = "Y";
		factor = 1.5;
	}
	else{ 
		axis = "X";
		factor = 1;
	}

	const style = {
		transform: `translate${axis}(${factor*offset}em)`,
		opacity
	};

	return (
		<li 
			className={ `${s.item} ${isActive ? s.active : s.inactive}` }
			style={ style }
			key={ `episode__pagination__${episodeNo}` }
			aria-current={ isActive }
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