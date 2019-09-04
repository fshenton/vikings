import React, { useContext, useState } from "react";
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


	// STATE
	// ----------------------------
	const [hidden, setHidden] = useState(true);


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

	const prevIndex = index - 1;
	const nextIndex = index + 1;

	let prevLink, nextLink;

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
				href={ `#${previewId}` }
				aria-controls={ previewId }
				onClick={ () => { setHidden(!hidden) } }
			>
				<img
					src={ thumbSrc }
					alt={ thumbDesc }
				/>
			</a>
			<div
				id={ previewId }
				aria-hidden={ hidden }
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
						<a href={ `#episode__${number}` }> 
							Close
						</a>
					</nav>
				</header>
				<video>
					{/*only render the video when it's activated*/}
				</video>
			</div>	
		</aside>
	);
}
