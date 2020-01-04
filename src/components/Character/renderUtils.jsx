import React, { useContext } from "react";
import UTILS from "SHARED/utils.js";
import { s } from "./";
import { 
	CharactersContext as Characters,
	ACTIONS
} from "COMPONENTS/Characters/"; 
import Link from "COMPONENTS/Link/";

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
	} //updateCharacterIndex

	// RENDER
	// ---------------------------------
	const safeName        = UTILS.convertToSafeString(name);
	const safeLabel       = UTILS.convertToSafeString(label);
	const className       = s[safeLabel];

	return (
		<Link
			className={ `${s.button} ${className}` } 
			destination={ `#${safeName}` }
			aria-controls="characters__items"
			aria-label={ `${label} character: ${name}.` }
			onClick={ updateCharacterIndex }
		>
			<span className={ s.label }>
				{ name }
			</span>
		</Link>
	);
}// renderButton

export default {
	button: renderButton
};
