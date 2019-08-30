import React from "react";
import { checkProps } from "./";

export default function Link(props){

	//shout at the dev who implemented this incorrectly
	checkProps(props);
	
	//RENDER
	//------------------------
	const {
		label,
		destination = ""
	} = props;

	const isInternal         = destination.indexOf("/") === 0;
	const externalAttributes = isInternal ? {} : {
		target: "_blank",
		rel: "noopener"
	};


	return (
		<a 
			href={destination}
			{...externalAttributes}>
			{label}
		</a>	
	);
}//Link