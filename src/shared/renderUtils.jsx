import React from "react";
import Link from "COMPONENTS/Link/";
import UTILS from "SHARED/utils.js";

function renderItem(namespace, data){

	const { 
		label = "" 
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);
						
	const key = `${namespace}__${safeLabel}`;

	return (
		<li key={key}>
			<Link {...data} />
		</li>
	);
}//renderItem



export default {
	item: renderItem
};