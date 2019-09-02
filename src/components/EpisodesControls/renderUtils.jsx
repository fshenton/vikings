import React from "react";

function renderPaginationLink(data){

	const { number } = data;

	return (
		<li key={`episode__pagination__${number}`}>
			<a href={ `#episode-${number}` }>
				{ number }
			</a>
		</li>
	);	
}// renderPaginationLink

export default {
	pagination: renderPaginationLink
};