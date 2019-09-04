import React, { useContext } from "react";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";
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

	const {
		src: thumbSrc,
		description: thumbDesc
	} = image;

	const { videoSrc } = video;
	const hidden       = index !== activeIndex;

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
				<a 
					href={ videoSrc } 
					rel="noopener" 
					target="_blank"
				>
					<img 
						src={ thumbSrc } 
						alt={ thumbDesc } 
					/>
				</a>
			</article>
		</li>
	);
}