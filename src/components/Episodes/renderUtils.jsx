import React from "react";
import Episode from "COMPONENTS/Episode/";

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
	episode: renderEpisode
};