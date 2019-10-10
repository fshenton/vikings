import React from "react";
import { s } from "./";

export default function Play(props) {

	const { colour } = props;

	return (
		<svg className={ s.icon } 
			 viewBox="0 0 128 128" 
			 alt="Play video"
			 preserveAspectRatio="xMaxYMax"
		>
	        <circle 
	        	cx="64" 
	        	cy="64" 
	        	r="56.5" 
	        	fill="none" 
	        	strokeWidth="15" 
	        	stroke={ colour }
	        />
	        <polygon 
	        	points="48,48 48,80 80,64" 
	        	fill={ colour }
	        />
		</svg>
	);
}
 