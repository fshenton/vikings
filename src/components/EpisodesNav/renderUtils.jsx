import React, { useContext } from "react";
import { s } from "./";
import Link from "COMPONENTS/Link/";
import { 
	ACTIONS,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
import UTILS from "SHARED/utils.js";

function renderPaginationLink(data, index){

	// CONTEXT
	// --------------------------
	const { 
		state: {
			activeIndex 
		},
		dispatch
	} = useContext(Episodes);

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

	const isActive = index === activeIndex;

	return (
		<li 
			className={ isActive ? s.active : s.inactive }
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
	pagination: renderPaginationLink
};