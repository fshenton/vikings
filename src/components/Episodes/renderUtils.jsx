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

	const id = `episode__${number}`;

	return (
		<Episode
			id={ id }
			key={ id }
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