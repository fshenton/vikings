import React from "react";
import Link from "COMPONENTS/Link/";
import UTILS from "SHARED/utils.js";

function renderItem(namespace, data){

	const { 
		label = "",
		...remainingProps
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);
						
	const key = `${namespace}__${safeLabel}`;

	return (
		<li key={key}>
			<Link {...remainingProps}>
				{label}
			</Link>
		</li>
	);
}//renderItem



export default {
	item: renderItem
};