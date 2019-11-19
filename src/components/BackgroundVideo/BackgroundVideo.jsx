import React from "react";
import { s } from "./";

export default function BackgroundVideo(props){

	const {
		sources,
		poster
	} = props;

	return (
		<div className={ s.wrapper }>	
			<video poster={ poster } 
				className={ s.first }
				autoPlay 
				loop
				muted
			>
				<source 
					src={ sources["mp4"][0] }
					type="video/mp4"
				/>
				<source 
					src={ sources["webm"] }
					type="video/webm"
				/>
			</video>
			<video poster={ poster } 
				className={ s.second }
				autoPlay 
				loop
				muted
			>
				<source 
					src={ sources["mp4"][1] }
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
