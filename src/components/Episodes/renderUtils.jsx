import React from "react";
import Episode from "COMPONENTS/Episode/";

function renderEpisode(data, index){

	const { 
		episodeNo,
		title,
		synopsis,
		thumbnail,
		trailer,
	} = data;

	const id = title
			.replace(/\W+/g, '-') // remove non-alphanumeric & replace with -s
			.toLowerCase()
			;

	return (
		<Episode
			id={ id }
			key={ id }
			index={ index }
			episodeNo={ episodeNo }
			title={ title }
			synopsis={ synopsis }
			thumbnail={ thumbnail }
			trailer={ trailer }
		/>
	);
}// renderEpisode

export default { 
	episode: renderEpisode
};