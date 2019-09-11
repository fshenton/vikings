import React from "react";
import { 
	RENDER, 
	data as characterData,
	CharactersProvider
} from "./";

export default function Characters(){

	const characters = characterData.map(RENDER.character);

	return(
		<article 
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
		</article>
	);
}// Characters
