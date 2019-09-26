import React from "react";
import Link from "COMPONENTS/Link/";
import UTILS from "SHARED/utils.js";
import { s } from "./";

function renderItem(data){

	const { 
		label = "",
		destination,
		...remainingProps
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);

	return (
		<li 
			key={ `social__${safeLabel}` }
			className={ s.item }
		>
			<Link
				className={ s.safeLabel }
				aria-label={ label }
				destination={ destination } 
				{ ...remainingProps }
			/>
		</li>
	);
}// renderItem

export default {
	item: renderItem
};
