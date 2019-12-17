import React from "react";
import Episode from "COMPONENTS/Episode/";
import EpisodesNav from "COMPONENTS/EpisodesNav/";
import { 
	data,
	RENDER,
	s,
	EpisodesProvider
} from "./";

export default function Episodes(){

	document.title = 'Vikings | Episodes';

	const episodes = data.map(RENDER.episode);

	return (
		<article className={ s.wrapper }>
			<EpisodesProvider>
				<ol 
					id="episodes__items"
					className={ s.list }
					aria-live="polite"
				>
					{ episodes }
				</ol>
				<EpisodesNav />
			</EpisodesProvider>
		</article>
	);
}// Episodes
