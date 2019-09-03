import React from "react";
import Episode from "COMPONENTS/Episode/";
import EpisodesNav from "COMPONENTS/EpisodesNav/";
import { 
	data,
	RENDER,
	EpisodesProvider
} from "./";

export default function Episodes(){

	const episodes = data.map(RENDER.episode);

	return (
		<>
			<article>
				<EpisodesProvider>
					<ol>
						{ episodes }
					</ol>
					<EpisodesNav />
				</EpisodesProvider>
			</article>
		</>
	);
}// Episodes
