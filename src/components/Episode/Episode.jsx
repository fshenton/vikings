import React, { useContext } from "react";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";
import EpisodePreview from "COMPONENTS/EpisodePreview/";
import { s } from "./";

export default function Episode(props){

	//CONTEXT
	//---------------------------
	const {
		activeIndex,
		episodeCount
	} = useContext(Episodes).state;


	//RENDER
	//---------------------------
	const {
		id,
		index,
		number,
		title,
		synopsis,
		thumbnail = {},
		trailer = {},
		prevTrailer = {},
		nextTrailer = {}
	} = props;

	const hidden = index !== activeIndex;

	return (
		<li
			id={ id }
			className={ s.wrapper }
			role="group"
			aria-roledescription="slide"
			aria-label={ `Episode ${number} of ${episodeCount}.` }
			aria-hidden={ hidden }
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
					episodeId={ id }
					index={ index }
					number={ number }
					title={ title }
					thumbnail={ thumbnail }
					trailer={ trailer }
					prevTrailer={ prevTrailer }
					nextTrailer={ nextTrailer }
				/>
			</article>
		</li>
	);
}