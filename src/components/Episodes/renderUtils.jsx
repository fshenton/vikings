import React from "react";
import Episode from "COMPONENTS/Episode/";
import { TrailerProvider } from "./";
import UTILS from "SHARED/utils.js";

function renderEpisode(data, index, prevTrailer, nextTrailer){

	const { 
		number,
		title,
		synopsis,
		thumbnail,
		trailer,
	} = data;

	const id = UTILS.convertToSafeString(title, "-");

	return (
		<TrailerProvider 
			value={ { prevTrailer, nextTrailer } }
			key={ `${id}-trailer-provider`}
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