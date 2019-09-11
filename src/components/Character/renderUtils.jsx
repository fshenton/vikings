import React, { useContext } from "react";
import UTILS from "SHARED/utils.js";
import Link from "COMPONENTS/Link/";
import { CharactersContext as Characters } from "COMPONENTS/Characters/"; 
import { s } from "./";


function renderButton(name, direction){

	// CONTEXT
	// ---------------------------------
	const {
		get: {
			activeIndex
		},
		set: {
			activeIndex: setActiveIndex
		}
	} = useContext(Characters);


	//RENDER
	// ---------------------------------
	const safeName       = UTILS.convertToSafeString(name);
	const directionLabel = direction > 0 ? "Next" : "Previous";


	// CLICK HANDLER
	// ---------------------------------
	function changeCharacter(e){
		e.preventDefault();

		const newCharIndex = activeIndex + direction;

		setActiveIndex(newCharIndex);
	}

	return (
		<Link
			className={ `${s.button} ${direction > 0 ? s.next : s.previous}` } 
			destination={ `#${safeName}` }
			aria-controls="characters__items"
			aria-label={ `${directionLabel} character: ${name}.` }
			onClick={ changeCharacter }
		>
			{ name }
		</Link>
	);
}//renderButton

export default {
	button: renderButton
};
