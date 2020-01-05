import React from "react";
import { 
	CharactersProvider,
	data as characterData,
	RENDER, 
	s
} from "./";
import VideoLayer from "COMPONENTS/VideoLayer/";

export default function Characters(){
	document.title = 'Vikings | Characters';

	// RENDER
	// -------------------------------
	const characters = characterData.map(RENDER.character);

	const sources = {
		mp4:  [
			"assets/video/particles-floating-720p.mp4"
		]
	};
	
	return(
		<article 
			className={ s.characters }
			aria-label="Characters"
			aria-roledescription="carousel"
			role="region"
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
