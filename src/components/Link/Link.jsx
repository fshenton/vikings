import React from "react";
import { UTILS } from "./";

export default function Link(props){

	//shout at the dev who implemented this incorrectly
	UTILS.checkProps(props);
	
	//RENDER
	//------------------------
	const {
		label, 
		destination = "",
		iconOnly    = false,
		className   = ""
	} = props;

	const isInternal         = destination.indexOf("/") === 0;
	const externalAttributes = isInternal ? {} : {
		target: "_blank",
		rel: "noopener"
	};
	const ariaLabel = iconOnly ? { "aria-label": label } : {};


	return (
		<a 
			className={className}
			href={destination}
			{...externalAttributes}
			{...ariaLabel}
		>
			{!iconOnly && label}
		</a>	
	);
}//Link