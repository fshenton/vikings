import React from "react";
import Link from "COMPONENTS/Link/";
import UTILS from "SHARED/utils.js";

function renderItem(data){

	const { 
		label = "",
		...remainingProps
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);

	return (
		<li key={ `navigation__${safeLabel}` }>
			<Link {...remainingProps}>
				{label}
			</Link>
		</li>
	);
}//renderItem

export default {
	item: renderItem
};