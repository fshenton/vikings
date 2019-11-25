import React from "react";
import { s } from "./";

export default function VideoLayer(props){

	const {
		className,
		sources,
		poster
	} = props;

	return (
		<div className={ `${s.wrapper } ${className}` }>	
			<video 
				poster={ poster } 
				autoPlay 
				loop
				muted
			>
				<source 
					src={ sources["mp4"] }
					type="video/mp4"
				/>
				<source 
					src={ sources["webm"] }
					type="video/webm"
				/>
			</video>
		</div>
	);
}// VideoLayer
