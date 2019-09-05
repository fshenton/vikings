import React, { useContext } from "react";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";
import EpisodePreview from "COMPONENTS/EpisodePreview/";
import { s } from "./";

export default function Episode(props){

	//CONTEXT
	//---------------------------
	const { 
		activeIndex,
		episodeCount: episodes
	} = useContext(Episodes);


	//RENDER
	//---------------------------
	const {
		id,
		index,
		number,
		title,
		synopsis,
		image = {},
		video = {},
	} = props;

	const hidden = index !== activeIndex;

	return (
		<li
			id={ id }
			className={ s.wrapper }
			role="group"
			aria-roledescription="slide"
			aria-label={ `Episode ${number} of ${episodes}.` }
			aria-hidden={ hidden.toString() }
		>
			<article>
				<h2>
					Episode { number }
				</h2>
				<h1>
					{ title }
				</h1>
				<p>
					{ synopsis }
				</p>
				<EpisodePreview 
					index={ index }
					number={ number }
					title={ title }
					image={ image }
					video={ video }
				/>
			</article>
		</li>
	);
}