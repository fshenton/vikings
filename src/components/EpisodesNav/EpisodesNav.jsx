import React, { useContext } from "react";
import { 
	data,
	EpisodesContext as Episodes
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
			<button 
				aria-label="Previous episode."
				aria-controls="episodes__items" 
			/>
			<button 
				aria-label="Next episode." 
				aria-controls="episodes__items"
			/>
			<ol>
				{ pagination }
			</ol>
		</nav>
	);
}// EpisodesNav
