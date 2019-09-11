import React from "react";
import { UTILS } from "./";

export default function Link(props){

	//shout at the dev who implemented this incorrectly
	UTILS.checkProps(props);

	//RENDER
	//------------------------
	const {
		destination = "",
		className   = "",
		children,
		...remainingProps
	} = props;

	const isInternal         = !!destination.match(/(\/|#)/);
	const externalAttributes = isInternal ? {} : {
		target: "_blank",
		rel: "noopener"
	};

	return (
		<a 
			className={ className }
			{ ...remainingProps }
			href={ destination }
			{ ...externalAttributes }
		>
			{ children }
		</a>	
	);
}// Link
