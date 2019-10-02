import React from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { s, data } from "./";
import LogoArtwork from "COMPONENTS/LogoArtwork/";

export default function Landing(){

	const {
		heading,
		subheading,
		body: bodyData
	} = data;

	const body = RENDER.body(bodyData, {
		scope: "landing", //for key names
		className: s.paragraph 
	}); 

	return(
		<>
			<LogoArtwork />
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
		</>
	);
}// Landing
