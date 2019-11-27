import React from "react";
import { s } from "./";

export default function Play(props) {
	
	const { 
		colour,
		hidden
	} = props;

	return (
		<svg className={ s.icon } 
			 viewBox="0 0 100 100" 
			 alt="Play video"
			 preserveAspectRatio="xMaxYMax"
			 aria-hidden={ hidden }
		>
			<defs>
				<mask id="triangle">
					<rect 
						width="100%" h
						eight="100%" 
						fill="white"
					/>
					<polygon 
						points="35,30 35,70 70,50" 
						fill="black"
					/>
				</mask>
			</defs>
			<circle 
				cx="50" 
				cy="50" 
				r="42" 
				fill={ colour } 
				strokeWidth="0" 
				stroke="none"
				mask="url(#triangle)"
			/>
			
		</svg>
	);
}
 