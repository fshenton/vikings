import React from "react";
import { 
	RENDER, 
	data as characterData 
} from "./";

export default function Characters(){

	const characters = characterData.map(RENDER.character);

	return(
		<ul>
			{characters}
		</ul>
	);
}//Characters
