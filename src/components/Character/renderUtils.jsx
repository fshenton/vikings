import React from "react";
import UTILS from "SHARED/utils.js";
import Link from "COMPONENTS/Link/";
import { s } from "./";


function renderButton(name, direction){
	const safeName = UTILS.convertToSafeString(name);

	return (
		<Link
			className={`${s.button} ${direction > 0 ? s.next : s.previous}`} 
			destination={`#${safeName}`}
		>
			{name}
		</Link>
	);
}//renderButton

export default {
	button: renderButton
};