import React, { useContext } from "react";
import { s } from "./";
import Link from "COMPONENTS/Link/";
import { 
	EpisodesContext as Episodes 
} from "COMPONENTS/Episodes/";
import UTILS from "SHARED/utils.js";

function renderPaginationLink(data, index){

	// CONTEXT
	// --------------------------
	const { 
		get: {
			activeIndex 
		},
		set: {
			activeIndex: setActiveIndex
		}
	} = useContext(Episodes);

	// RENDER
	// --------------------------
	const { 
		number: episodeNo,
		title
	} = data;

	const episodeId = UTILS.convertToHyphenatedString(title);

	const isActive = index === activeIndex;

	// CLICK HANDLER
	// --------------------------
	function handlePageClick(){
		setActiveIndex(index);
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