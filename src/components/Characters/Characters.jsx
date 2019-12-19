import React from "react";
import { 
	RENDER, 
	data as characterData,
	CharactersProvider
} from "./";
import VideoLayer from "COMPONENTS/VideoLayer/";
import { s } from "./";

export default function Characters(){

	document.title = 'Vikings | Characters';

	// Render
	// --------------------------------------

	const characters = characterData.map(RENDER.character);

	const sources = {
		mp4:  [
			"assets/video/particles-floating-720p.mp4"
		]
	};
	
	return(
		<article 
			className={ s.characters }
			role="region"
			aria-roledescription="carousel"
			aria-label="Characters"
		>
			<CharactersProvider>
				<ul 
					id="characters__items"
					aria-live="polite"
				>
					{ characters }
				</ul>
			</CharactersProvider>
			<VideoLayer 
				className={ s.dust }
				sources={ sources } 
			/>
		</article>
	);
}// Characters
