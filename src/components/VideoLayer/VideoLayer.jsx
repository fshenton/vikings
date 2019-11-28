import React, { useContext } from "react";
import { s } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function VideoLayer(props){

	//CONTEXT
	//--------------------------

	const { 
		open: isNavOpen
	} = useContext(Nav).state;

	//PROPS
	//--------------------------

	const {
		className,
		sources,
		poster
	} = props;

	//RENDER
	//--------------------------

	const isHidden = isNavOpen;

	return (
		<div className={ `${s.wrapper } ${className}` }>	
			<video 
				poster={ poster } 
				autoPlay 
				loop
				muted
				aria-hidden={ isHidden }
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
