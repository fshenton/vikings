import React, { useContext } from "react";
import {
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes";

export default function EpisodePreview(props){

	// CONTEXT
	//-----------------------------
	const {
		activeIndex,
		episodeCount
	} = useContext(Episodes);


	// RENDER
	// ----------------------------
	const { 
		index,
		number,
		title,
		thumbSrc,
		thumbDesc,
		videoSrc
	} = props;

	const previewId = `episode__${number}__preview`;

	//this section could be one for render utils?
	const prevIndex = index - 1;
	const nextIndex = index + 1;

	let prevLink;
	let nextLink;

	if(prevIndex > -1){
		prevLink = 
		<a href={ `#episode__${number-1}__preview` }>
			Prev
		</a>
		;
	}

	if(nextIndex < episodeCount){
		nextLink =
		<a href={ `#episode__${number+1}__preview` }>
			Next
		</a>
		;
	}

	return (
		<aside>
			<a
				href={ videoSrc }
				aria-controls={ previewId }
			>
				<img
					src={ thumbSrc }
					alt={ thumbDesc }
				/>
			</a>
			<div
				id={ previewId }
				aria-hidden="true"
			>
				<header>
					<h2>
						{ `Episode ${number}` } 
					</h2>
					<h1>
						{ title }
					</h1>
					<nav>
						{ prevLink }
						{ nextLink }
						<a href="hidepreviewandreturntocurrentepisodepage" />
					</nav>
				</header>
				<video>
					{/*only render the video when it's activated*/}
				</video>
			</div>	
		</aside>
	);
}
