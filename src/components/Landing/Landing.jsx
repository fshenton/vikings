import React from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { s, data } from "./";
import LogoArtwork from "COMPONENTS/LogoArtwork/";
import WatchNow from "COMPONENTS/WatchNow/";
import BackgroundVideo from "COMPONENTS/BackgroundVideo/";

export default function Landing(){

	const {
		heading,
		subheading,
		body: bodyData,
		video: {
			sources,
			poster
		}
	} = data;

	const body = RENDER.body(bodyData, {
		scope: "landing", //for key names
		className: s.paragraph 
	}); 

	return(
		<>
			<LogoArtwork />
			<BackgroundVideo 
				sources={ sources } 
				poster={ poster }
			/>
			<header className={ s.wrapper }>
				<h1 className={ s.heading }>
					{ heading }
				</h1>
				<h2 className={ s.subheading }>
					{ subheading }
				</h2>
				<div className={ s.body }>
					{ body }
				</div>
			</header>
			<div className={ s.glow }/>
		</>
	);
}// Landing
