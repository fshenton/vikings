import React from "react";
import { s } from "./";

export default function Play(props) {
	
	const { 
		colour,
		className = ""
	} = props;

	return (
		<svg className={ `${s.icon} ${s.preview}` } 
			 viewBox="0 0 100 100" 
			 alt="Play video"
			 preserveAspectRatio="xMaxYMax"
		>
			<circle 
				cx="50" 
				cy="50" 
				r="42" 
				fill="none" 
				strokeWidth="15" 
				stroke={ colour }
			/>
			<polygon 
				points="37.5,37.5 37.5,62.5 62.5,50" 
				fill={ colour }
			/>
		</svg>
	);
}
 