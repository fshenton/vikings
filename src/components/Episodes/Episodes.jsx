import React from "react";
import Episode from "COMPONENTS/Episode/";
import EpisodesNav from "COMPONENTS/EpisodesNav/";
import { 
	data,
	RENDER,
	EpisodesProvider
} from "./";

export default function Episodes(){

	const episodes = data.map( (obj, index) => {
		//passing prev and next video src for video nav buttons
		const prevTrailer = index !== 0 
			? data[index-1].trailer
			: {};
		
		const nextTrailer = index !== data.length-1 
			? data[index+1].trailer
			: {};

		return RENDER.episode(obj, index, prevTrailer, nextTrailer);
	});

	return (
		<article>
			<EpisodesProvider>
				<ol 
					id="episodes__items"
					aria-live="polite"
				>
					{ episodes }
				</ol>
				<EpisodesNav />
			</EpisodesProvider>
		</article>
	);
}// Episodes
