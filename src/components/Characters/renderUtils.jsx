import React from "react";
import UTILS from "SHARED/utils.js";
import Character from "COMPONENTS/Character/";

function renderCharacter(data, index){
	const {
		actor,
		body,
		image, 
		name,
		nickname
	} = data;

	const safeName = UTILS.convertToSafeString(name);

	return (
		<Character
			id={ safeName } 
			actor={ actor }
			body={ body } 
			image={ image }
			index={ index }
			key={ `${safeName}` }
			name={ name }
			nickname={ nickname }
		/>
	);
}// renderCharacter

export default {
	character: renderCharacter
};
