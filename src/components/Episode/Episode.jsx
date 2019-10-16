import React, { useContext } from "react";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";
import EpisodePreview from "COMPONENTS/EpisodePreview/";
import { s } from "./";
import RENDER from "SHARED/renderUtils.jsx";

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
		synopsis: synopsisData,
		thumbnail = {},
		trailer = {}
	} = props;

	const hidden = index !== activeIndex;

	const synopsis = RENDER.body(synopsisData, {
		scope: "episode", //for key 
		className: s.paragraph
	});
	

	return (
		<li
			id={ id }
			className={ s.wrapper }
			role="group"
			aria-roledescription="slide"
			aria-label={ `Episode ${number} of ${episodeCount}.` }
			aria-hidden={ hidden }
		>
			<article className={ s.article }>
				<EpisodePreview 
					episodeId={ id }
					index={ index }
					number={ number }
					title={ title }
					thumbnail={ thumbnail }
					trailer={ trailer }
				/>
				<div className={ s.container }>
					<h1 className={ s.title }>
						{ title }
					</h1>
					<h2 className={ s.episode }>
						Episode { number }
					</h2>
					<div className={ s.body }>
						{ synopsis }
					</div>
					<div 
						className={ s.fade }>
					</div>
				</div>
			</article>
		</li>
	);
}