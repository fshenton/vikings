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
	const { number } = data;

	const isActive = index === activeIndex;

	return (
		<li 
			key={`episode__pagination__${number}`}
			aria-current={isActive.toString()}
		>
			<Link 
				destination={ `#episode-${number}` }
				className={ s.paginationLink }
			>
				{ number }
			</Link>
		</li>
	);	
}// renderPaginationLink

export default {
	pagination: renderPaginationLink
};