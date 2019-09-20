import React from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { s } from "./";

export default function Landing(){

	const bodyData = `When a king falls, another will rise. But who will it be?\nGet a closer look at <span>Vikings season 5</span>.`;

	const body = RENDER.body(bodyData, "landing"); //comp name for key

	return(
		<header className={ s.wrapper }>
			<h1 className={ s.heading }>
				Vikings
			</h1>
			<h2 className={ s.subheading }>
				Descend into Darkness
			</h2>
			<div className={ s.body }>
				{ body }
			</div>
		</header>
	);
}// Landing
