import React from "react";
import { s } from "./";

export default function BackgroundVideo(props){

	const {
		sources,
		poster
	} = props;

	return (
		<div className={ s.wrapper }>	
			<video poster={ poster }>
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
}// BackgroundVideo
