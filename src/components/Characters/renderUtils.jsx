import React from "react";
import Character from "COMPONENTS/Character/";

function renderCharacter(data){

	const {
		name,
		nickname,
		actor,
		body,
		image 
	} = data;

	return (
		<Character 
			name={name}
			nickname={nickname}
			actor={actor}
			body={body}
			image={image}
		/>
	);
}//renderCharacter

export default {
	character: renderCharacter
};