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
				<ol 
					id="episodes-list"
					aria-live="polite"
				>
					{ episodes }
				</ol>
				<nav>
					<button 
						aria-label="Previous episode." 
						aria-controls="episodes-list"
					/>
					<button 
						aria-label="Next episode."
						aria-controls="episodes-list" 
					/>
					<ol>
						{ pagination }
					</ol>
				</nav>
			</EpisodesProvider>
		</article>
	);
}// Episodes
