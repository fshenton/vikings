import React from "react";
import UTILS from "SHARED/utils.js";
import Link from "COMPONENTS/Link/";
import { s } from "./";


function renderButton(name, direction){
	const safeName       = UTILS.convertToSafeString(name);
	const directionLabel = direction > 0 ? "Next" : "Previous";

	return (
		<Link
			className={`${s.button} ${direction > 0 ? s.next : s.previous}`} 
			destination={`#${safeName}`}
			aria-controls="characters__items"
		>
			{`${directionLabel} character: ${name}.`}
		</Link>
	);
}//renderButton

export default {
	button: renderButton
};