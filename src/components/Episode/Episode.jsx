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
		trailer = {}
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
				<EpisodePreview 
					episodeId={ id }
					index={ index }
					number={ number }
					title={ title }
					thumbnail={ thumbnail }
					trailer={ trailer }
				/>
				<div className={ s.content }>
					<h2 className={ s.episode }>
						Episode { number }
					</h2>
					<h1 className={ s.title }>
						{ title }
					</h1>
					<p className={ s.body }>
						{ synopsis }
					</p>
				</div>
			</article>
		</li>
	);
}