import React, { useContext } from "react";
import { s } from "./";

export default function VideoLayer(props){

	//PROPS
	//--------------------------

	const {
		className,
		sources,
		poster
	} = props;

	//RENDER
	//--------------------------

	return (
		<div className={ `${s.wrapper } ${className}` }>	
			<video 
				className={ s.video }
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
