import React from "react";
import { UTILS } from "./";

export default function Link(props){

	//shout at the dev who implemented this incorrectly
	UTILS.checkProps(props);
	
	//RENDER
	//------------------------
	const {
		destination = "",
		iconOnly    = false,
		className   = "",
		children: label,
		...remainingProps
	} = props;

	const isInternal         = !!destination.match(/(\/|#)/);
	const externalAttributes = isInternal ? {} : {
		target: "_blank",
		rel: "noopener"
	};
	const ariaLabel = iconOnly ? { "aria-label": label } : {};


	return (
		<a 
			className={className}
			{...remainingProps}
			href={destination}
			{...externalAttributes}
			{...ariaLabel}
		>
			{!iconOnly && label}
		</a>	
	);
}//Link