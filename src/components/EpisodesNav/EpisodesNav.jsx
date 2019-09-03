import React, { useContext } from "react";
import { data } from "COMPONENTS/Episodes/";
import { RENDER } from "./";
import { Episodes } from "COMPONENTS/Episodes/";

export default function EpisodesNav(){
	
	//CONTEXT
	//---------------------------
	const { activeIndex } = useContext(Episodes);

	//RENDER
	//---------------------------
	const pagination = data.map(RENDER.pagination);

	return (
		<nav>
			<button aria-label="Previous episode." />
			<button aria-label="Next episode." />
			<ol>
				{ pagination }
			</ol>
		</nav>
	);
}// EpisodesNav
