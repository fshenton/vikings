import React from 'react';
import { s } from "./";

export default function SvgFilters() {
	return (
		<svg className={ s.filters }> 
			{/*CIRCLE*/}
			<filter id="powder">
				<feTurbulence baseFrequency="0.2" numOctaves="3"/>
				<feDisplacementMap in="SourceGraphic" scale="5" />
			</filter>
			{/*LINE*/}
			<filter 
				id="rope"
				filterUnits="userSpaceOnUse"
	  			width="100%"
	  			height="100%" 
			>
				<feTurbulence baseFrequency="0.2" numOctaves="3"/>
				<feDisplacementMap in="SourceGraphic" scale="7" />
			</filter>	
		</svg>
	);
}
