import React, { useContext } from "react";
import { 
	data,
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes/";
import { RENDER } from "./";

export default function EpisodesNav(){
	
	const pagination = data.map(RENDER.pagination);

	return (
		<nav>
			<button 
				aria-label="Previous episode."
				aria-controls="episodes__items episodes__pagination"
			/>
			<button 
				aria-label="Next episode." 
				aria-controls="episodes__items episodes__pagination"
			/>
			<ol id="episodes__pagination">
				{ pagination }
			</ol>
		</nav>
	);
}// EpisodesNav
