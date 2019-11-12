import React from "react";
import Episode, { TrailerProvider } from "COMPONENTS/Episode/";
import { data as episodesData } from "./";
import UTILS from "SHARED/utils.js";

function renderEpisode(data, index){

	const { 
		number,
		title,
		synopsis,
		thumbnail,
		trailer,
		poster
	} = data;

	const id = UTILS.convertToSafeString(title, "-");

	const { trailer: prevTrailer } = episodesData[index - 1] || {};
	const { trailer: nextTrailer } = episodesData[index + 1] || {};

	return (
		<TrailerProvider 
			prev={ prevTrailer }
			next={ nextTrailer } 
			key={ `provider__trailer__${id}` }
		>
			<Episode
				id={ id }
				key={ id }
				index={ index }
				number={ number }
				title={ title }
				synopsis={ synopsis }
				thumbnail={ thumbnail }
				trailer={ trailer }
				poster={ poster }
			/>
		</TrailerProvider>
	);
}// renderEpisode

export default { 
	episode: renderEpisode
};