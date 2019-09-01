import React from "react";
import Episode from "COMPONENTS/Episode/";

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

function renderEpisode(data, index){

	const { 
		number,
		title,
		synopsis,
		image,
		video,
	} = data;

	return (
		<Episode
			key={ `episode__${number}` }
			index={ index }
			number={ number }
			title={ title }
			synopsis={ synopsis }
			image={ image }
			video={ video }
		/>
	);
}// renderEpisode

export default { 
	pagination: renderPaginationLink,
	episode: renderEpisode
};