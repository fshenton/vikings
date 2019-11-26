import React from "react";
import { 
	RENDER, 
	data as characterData,
	CharactersProvider
} from "./";
import { s } from "./";

export default function Characters(){

	const characters = characterData.map(RENDER.character);

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
		</article>
	);
}// Characters
