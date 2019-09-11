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
	} = data;

	const id = UTILS.convertToSafeString(title, "-");

	const { trailer: prevTrailer } = episodesData[index - 1] || {};
	const { trailer: nextTrailer } = episodesData[index + 1] || {};

	return (
		<TrailerProvider 
			prev={ prevTrailer }
			next={ nextTrailer } 
			key={ `${id}-trailer-provider` }
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
			/>
		</TrailerProvider>
	);
}// renderEpisode

export default { 
	episode: renderEpisode
};