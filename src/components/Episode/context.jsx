import React, { createContext } from "react";

const TrailerContext = createContext();

function TrailerProvider(props){
	const {
		children,
		prev,
		next
	} = props;

	return (
		<TrailerContext.Provider value={ { prev, next} }>
			{ children }
		</TrailerContext.Provider>
	);
}// TrailerProvider

export { 
	TrailerContext, 
	TrailerProvider 
};