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

	// RENDER
	// --------------------------
	const { 
		number: episodeNo,
		title
	} = data;

	const episodeId = UTILS.convertToSafeString(title, "-");

	const isActive = index === activeIndex;

	// CLICK HANDLER
	// --------------------------
	function handlePageClick(){
		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: index
		});
	}// handlePageClick

	return (
		<li 
			key={ `episode__pagination__${episodeNo}` }
			aria-current={ isActive.toString()}
		>
			<Link 
				destination={ `#${episodeId}` }
				className={ s.paginationLink }
				onClick={ handlePageClick }
			>
				{ episodeNo }
			</Link>
		</li>
	);	
}// renderPaginationLink

export default {
	pagination: renderPaginationLink
};