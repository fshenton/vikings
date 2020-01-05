import React from "react";
import { s } from "./";

export default function Play(props) {
	
	const {
		className = "", 
		colour,
		hidden
	} = props;

	return (
		<svg 
			className={ `${s.icon} ${className}` } 
			alt="Play video"
			aria-hidden={ hidden }
			preserveAspectRatio="xMaxYMax"
			viewBox="0 0 100 100" 
		>
			<mask id="triangle">
				<rect 
					width="100%"
					height="100%" 
					fill="white"
				/>
				<polygon 
					points="40,30 40,70 65,50" 
					fill="black"
				/>
			</mask>
			<circle 
				cx="50" 
				cy="50" 
				r="49" 
				fill={ colour } 
				strokeWidth="0" 
				stroke="none"
				mask="url(#triangle)"
			/>
		</svg>
	);
}// Play
 