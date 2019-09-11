import React from "react";
import Episode from "COMPONENTS/Episode/";
import { TrailersProvider } from "./";
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
		<TrailersProvider 
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
		</TrailersProvider>
	);
}// renderEpisode

export default { 
	episode: renderEpisode
};