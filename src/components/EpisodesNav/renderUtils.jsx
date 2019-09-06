import React, { useContext } from "react";
import { s } from "./";
import Link from "COMPONENTS/Link/";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";

function renderPaginationLink(data, index){

	// CONTEXT
	// --------------------------
	const { activeIndex } = useContext(Episodes);

	// RENDER
	// --------------------------
	const { episodeNo } = data;

	const isActive = index === activeIndex;

	return (
		<li 
			key={`episode__pagination__${episodeNo}`}
			aria-current={isActive.toString()}
		>
			<Link 
				destination={ `#episode-${episodeNo}` }
				className={ s.paginationLink }
			>
				{ episodeNo }
			</Link>
		</li>
	);	
}// renderPaginationLink

export default {
	pagination: renderPaginationLink
};