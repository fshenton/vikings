import React from "react";
import { data } from "COMPONENTS/Episodes/";
import { RENDER } from "./";

export default function EpisodesControls(){

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
}// EpisodesControls
