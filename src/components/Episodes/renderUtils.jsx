import React from "react";
import UTILS from "SHARED/utils.js";
import { data as episodesData } from "./";
import Episode, { TrailerProvider } from "COMPONENTS/Episode/";

function renderEpisode(data, index){
	const { 
		number,
		poster,
		synopsis,
		title,
		thumbnail,
		trailer
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
				index={ index }
				key={ id }
				number={ number }
				poster={ poster }
				synopsis={ synopsis }
				thumbnail={ thumbnail }
				title={ title }
				trailer={ trailer }
			/>
		</TrailerProvider>
	);
}// renderEpisode

export default { 
	episode: renderEpisode
};
