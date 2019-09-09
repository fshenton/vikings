import React from "react";
import Episode from "COMPONENTS/Episode/";
import UTILS from "SHARED/utils.js";

function renderEpisode(data, index){

	const { 
		number,
		title,
		synopsis,
		thumbnail,
		trailer,
	} = data;

	const id = UTILS.convertToHyphenatedString(title);

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