import React from "react";
import { UTILS } from "./";

export default function Link(props){
	UTILS.checkProps(props);

	// PROPS
	// ------------------------
	const {
		destination = "",
		className   = "",
		children,
		tabIndex    = 0,
		...remainingProps
	} = props;

	const isInternal         = !destination.match(/http/g);
	const externalAttributes = isInternal ? {} : {
		target: "_blank",
		rel: "noopener"
	};

	// RENDER
	// -------------------------
	return (
		<a 
			className={ className }
			href={ destination }
			tabIndex={ tabIndex }
			{ ...externalAttributes }
			{ ...remainingProps }
		>
			{ children }
		</a>	
	);
}// Link
