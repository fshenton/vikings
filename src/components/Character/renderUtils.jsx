import React, { useContext } from "react";
import UTILS from "SHARED/utils.js";
import Link from "COMPONENTS/Link/";
import { 
	CharactersContext as Characters,
	ACTIONS
} from "COMPONENTS/Characters/"; 
import { s } from "./";


function renderButton(name, label, newIndex){

	// CONTEXT
	// ---------------------------------
	const {
		state: {
			activeIndex
		},
		dispatch
	} = useContext(Characters);


	// CLICK HANDLER
	// ---------------------------------
	function updateCharacterIndex(e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.GET_CHARACTER,
			value: newIndex
		});
	}


	//RENDER
	// ---------------------------------
	const safeName       = UTILS.convertToSafeString(name);

	return (
		<Link
			className={ `${s.button} ${label === "Next" ? s.next : s.previous}` } 
			destination={ `#${safeName}` }
			aria-controls="characters__items"
			aria-label={ `${label} character: ${name}.` }
			onClick={ updateCharacterIndex }
		>
			{ name }
		</Link>
	);
}//renderButton

export default {
	button: renderButton
};
