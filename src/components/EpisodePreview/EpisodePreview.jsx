import React, { useContext } from "react";
import {
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes";

export default function EpisodePreview(props){

	// CONTEXT
	//-----------------------------
	const {
		episodeCount, 
		activeIndex,
		setActiveIndex,
		overlayActive,
		setOverlayActive
	} = useContext(Episodes);


	// RENDER
	// ----------------------------
	const { 
		index,
		number,
		title,
		image: {
			src: thumbSrc,
			description: thumbDesc
		},
		video: {
			src: videoSrc
		}
	} = props;

	const previewId = `episode__${number}__preview`;

	// handle visibility of active episode and episode preview overlay
	const isActiveEpisode 	= activeIndex === index;
	const thisOverlayActive = isActiveEpisode && overlayActive;
	const hidden 			= !thisOverlayActive;

	const isFirst 	= index === 0;
	const isLast 	= index === episodeCount - 1;

	function handleNavPressed(e, newIndex){
		e.preventDefault();

		setActiveIndex(newIndex);
	}// handleNavPressed


	function showOverlay(e, show){
		e.preventDefault();

		setOverlayActive(show);
	}// showOverlay

	return (
		<aside>
			<a
				href={ videoSrc }
				aria-controls={ previewId }
				onClick={ (e) => { showOverlay(e, true) } }
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
						{ !isFirst && (
							<a 
								href={ `#episode__${number-1}__preview` }
								aria-label="Previous."
								onClick={ (e) => { 
									handleNavPressed(e, index-1) 
								}}
							>
								Prev
							</a>
						)}
						{ !isLast && (
							<a 
								href={ `#episode__${number+1}__preview` } 
								onClick={ (e) => { 
									handleNavPressed(e, index+1) 
								}}
							>
								Next
							</a>
						)}
						<a 
							href={ `#episode__${number}` }
							onClick={ e => showOverlay(e, false) }
						> 
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
}// EpisodePreview
