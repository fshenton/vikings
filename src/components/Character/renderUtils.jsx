import React, { useContext } from "react";
import UTILS from "SHARED/utils.js";
import Link from "COMPONENTS/Link/";
import { 
	CharactersContext as Characters,
	ACTIONS
} from "COMPONENTS/Characters/"; 
import { s } from "./";


function renderButton(name, direction, newIndex){

	// CONTEXT
	// ---------------------------------
	const {
		state: {
			activeIndex
		},
		dispatch
	} = useContext(Characters);


	//RENDER
	// ---------------------------------
	const safeName       = UTILS.convertToSafeString(name);
	const directionLabel = direction > 0 ? "Next" : "Previous";


	// CLICK HANDLER
	// ---------------------------------
	function updateCharacterIndex(e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.GET_CHARACTER,
			value: newIndex
		});
	}

	return (
		<Link
			className={ `${s.button} ${direction > 0 ? s.next : s.previous}` } 
			destination={ `#${safeName}` }
			aria-controls="characters__items"
			aria-label={ `${directionLabel} character: ${name}.` }
			onClick={ updateCharacterIndex }
		>
			{ name }
		</Link>
	);
}//renderButton

export default {
	button: renderButton
};
