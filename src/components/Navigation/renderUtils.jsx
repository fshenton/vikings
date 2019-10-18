import React from "react";
import Link from "COMPONENTS/Link/";
import UTILS from "SHARED/utils.js";
import { s } from "./";

function renderItem(data){

	const { 
		label = "",
		...remainingProps
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);

	return (
		<li 
			key={ `navigation__${safeLabel}` }
			className={ s.item }
		>
			<Link 
				className={ s.link }
				{ ...remainingProps }
			>
				{ label }
			</Link>
		</li>
	);
}// renderItem

export default {
	item: renderItem
};
