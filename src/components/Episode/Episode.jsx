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
		episodeNo,
		title,
		synopsis,
		thumbnail = {},
		trailer = {},
	} = props;

	const hidden = index !== activeIndex;

	return (
		<li
			id={ id }
			className={ s.wrapper }
			role="group"
			aria-roledescription="slide"
			aria-label={ `Episode ${episodeNo} of ${episodes}.` }
			aria-hidden={ hidden.toString() }
		>
			<article>
				<h2>
					Episode { episodeNo }
				</h2>
				<h1>
					{ title }
				</h1>
				<p>
					{ synopsis }
				</p>
				<EpisodePreview 
					index={ index }
					episodeNo={ episodeNo }
					title={ title }
					thumbnail={ thumbnail }
					trailer={ trailer }
				/>
			</article>
		</li>
	);
}