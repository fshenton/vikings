import React from 'react';

export default function SvgFilters() {
	return (
		<svg> 
			<filter id="powder">
				<feTurbulence baseFrequency="0.2" numOctaves="3"/>
				<feDisplacementMap in="SourceGraphic" scale="5" />
			</filter>
			<filter 
				id="rope"
				filterUnits="userSpaceOnUse"
	  			width="100%"
	  			height="100%" 
			>
				<feTurbulence baseFrequency="0.2" numOctaves="3"/>
				<feDisplacementMap in="SourceGraphic" scale="5" />
			</filter>	
		</svg>
	);
}