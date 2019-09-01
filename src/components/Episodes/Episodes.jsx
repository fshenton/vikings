import React from "react";
import Episode from "COMPONENTS/Episode/";
import { 
	data,
	RENDER,
	EpisodesProvider
} from "./";

export default function Episodes(){

	const pagination = data.map(RENDER.pagination);
	const episodes = data.map(RENDER.episode);

	return (
		<article>
			<EpisodesProvider>
				<ol>
					{ episodes }
				</ol>
				<nav>
					<button aria-label="Previous episode." />
					<button aria-label="Next episode." />
					<ol>
						{ pagination }
					</ol>
				</nav>
			</EpisodesProvider>
		</article>
	);
}// Episodes
