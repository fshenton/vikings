import React from "react";
import Link from "COMPONENTS/Link/";

function renderItem(data){

	const { 
		label = "" 
	} = data;
	
	const safeLabel = label
						// .replace(/\W/g, '') // remove non-alphanumeric
						.replace(/ /g, "_") // replace spaces with underscores
						.toLowerCase();
	const key = `navigation__${safeLabel}`;

	return (
		<li key={key}>
			<Link {...data} />
		</li>
	);
}//renderItem



export default {
	item: renderItem
};