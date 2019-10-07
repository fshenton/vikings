import React from "react";
import { s } from "./";

export default function BackgroundVideo(props){

	const {
		sources: {
			mp4 = {},
			webm = {}
		},
		poster
	} = props.video;

	return (
		<div className={ s.wrapper }>	
			<video poster={ poster }>
				<source 
					src={ mp4 }
					type="video/mp4"
				/>
				<source 
					src={ webm }
					type="video/webm"
				/>
			</video>
		</div>
	);
}// BackgroundVideo
