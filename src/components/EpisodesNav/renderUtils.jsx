import React from "react";
import { s } from "./";
import Link from "COMPONENTS/Link/";

function renderPaginationLink(data){

	const { number } = data;

	return (
		<li key={`episode__pagination__${number}`}>
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