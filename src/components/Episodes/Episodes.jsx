import React from "react";
import { 
	data,
	RENDER
} from "./";

export default function Episodes(){

	const pagination = data.map(RENDER.pagination);
	const episodes = data.map(RENDER.episode);

	return (
		<>
			<ol>
				{ episodes }
			</ol>
			<nav>
				<button aria-label="Previous episode." />
				<button aria-label="Next episode." />
				<ol>
					{ pagination }
				</ol>
			</nav>
		</>
	);
}// Episodes
