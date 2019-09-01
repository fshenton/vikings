import React from "react";
import Character from "COMPONENTS/Character/";
import UTILS from "SHARED/utils.js";

function renderCharacter(data, index){

	const {
		name,
		nickname,
		actor,
		body,
		image 
	} = data;

	const safeName = UTILS.convertToSafeString(name);

	return (
		<Character
			id={safeName} 
			name={name}
			nickname={nickname}
			actor={actor}
			body={body}
			image={image}
			index={index}
			key={`${safeName}`}
		/>
	);
}// renderCharacter

export default {
	character: renderCharacter
};