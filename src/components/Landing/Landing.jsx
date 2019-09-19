import React from "react";
import { s } from "./";

export default function Landing(){
	return(
		<header className={ s.wrapper }>
			<h1 className={ s.heading }>
				Vikings
			</h1>
			<h2 className={ s.subheading }>
				Descend into Darkness
			</h2>
			<p className={ s.body }>
				When a king falls, another will rise. But who will it be?
			</p>
			<p className={ s.body }>
				Get a closer look at <span>Vikings season 5</span>.
			</p>
		</header>
	);
}// Landing
