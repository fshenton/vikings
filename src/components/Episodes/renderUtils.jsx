import React from "react";
import Episode from "COMPONENTS/Episode/";
import UTILS from "SHARED/utils.js";

function renderEpisode(data, index, prev, next){

	const { 
		number,
		title,
		synopsis,
		thumbnail,
		trailer,
	} = data;

	const { trailer: prevTrailer } = prev; 
	const { trailer: nextTrailer } = next; 

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
			prevTrailer={ prevTrailer }
			nextTrailer={ nextTrailer }
		/>
	);
}// renderEpisode

export default { 
	episode: renderEpisode
};