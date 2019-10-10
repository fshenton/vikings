import React from "react";
import { s } from "./";

export default function Play(props) {

	const { colour } = props;

	return (
		<svg className={ s.playButton } 
			 viewBox="0 0 200 200" 
			 alt="Play video">
	        <circle 
	        	cx="100" 
	        	cy="100" 
	        	r="90" 
	        	fill="none" 
	        	strokeWidth="15" 
	        	stroke={ colour }/>
	        <polygon 
	        	points="70, 55 70, 145 145, 100" 
	        	fill="#fff"
	        />
		</svg>
	);
}
 