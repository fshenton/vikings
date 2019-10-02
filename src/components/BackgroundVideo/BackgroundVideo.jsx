import React from "react";
import { s } from "./";

export default function BackgroundVideo(props){

	const {
		videoSrc,
		posterSrc = {}
	} = props.video;

	return (
		<div className={ s.wrapper }>	
			<video poster={ posterSrc }>
				<source 
					src={ videoSrc }
					type="video/mp4"
				/>
			</video>
		</div>
	);
}// BackgroundVideo
