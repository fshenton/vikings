import React from "react";
import Episode from "COMPONENTS/Episode/";

function renderEpisode(data, index){

	const { 
		number,
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
			number={ number }
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