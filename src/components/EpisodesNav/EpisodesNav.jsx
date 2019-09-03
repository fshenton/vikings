import React, { useContext } from "react";
import { 
	data,
	Episodes
} from "COMPONENTS/Episodes/";
import { RENDER } from "./";

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
