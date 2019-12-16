import React from "react";
import { 
	RENDER, 
	data as characterData,
	CharactersProvider
} from "./";
import VideoLayer from "COMPONENTS/VideoLayer/";
import { s } from "./";

export default function Characters(){

	// Render
	// --------------------------------------

	const characters = characterData.map(RENDER.character);

	const sources = {
		mp4:  [
			"assets/video/particles-floating-720p.mp4"
		],
		webm: "path/to/video.webm"
	};

	const poster = "path/to/poster.jpg";
	
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
			<div 
				className={ s.glow }
			/>
			<VideoLayer 
				className={ s.dust }
				sources={ sources } 
				poster={ poster }
			/>
		</article>
	);
}// Characters
