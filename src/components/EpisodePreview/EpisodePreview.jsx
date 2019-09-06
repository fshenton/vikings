import React, { useContext } from "react";
import {
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes";

export default function EpisodePreview(props){

	// CONTEXT
	//-----------------------------
	const episodes = useContext(Episodes);


	// RENDER
	// ----------------------------
	const { 
		index,
		number: episodeNo,
		title,
		image: {
			src: thumbSrc,
			description: thumbDesc
		},
		video: {
			src: videoSrc
		}
	} = props;

	const previewId = `episode__${episodeNo}__preview`;

	// handle visibility of active episode and episode preview overlay
	const isActiveEpisode 	= episodes.get.activeIndex === index;
	const thisOverlayActive = isActiveEpisode && episodes.get.overlayActive;
	const hidden 			= !thisOverlayActive;

	const isFirst 	= index === 0;
	const isLast 	= index === episodes.get.episodeCount - 1;

	const prevEpisodeNo = episodeNo - 1;
	const nextEpisodeNo = episodeNo + 1;

	function handleNavPressed(e, newIndex){
		e.preventDefault();

		episodes.set.activeIndex(newIndex);
	}// handleNavPressed


	function showOverlay(e, show){
		e.preventDefault();

		episodes.set.overlayActive(show);
	}// showOverlay

	return (
		<aside>
			<a
				href={ videoSrc }
				aria-controls={ previewId }
				aria-label="Watch episode preview."
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
						{ `Episode ${episodeNo}` } 
					</h2>
					<h1>
						{ title }
					</h1>
					<nav>
						{ !isFirst && (
							<a 
								href={ `#episode__preview__${prevEpisodeNo}` }
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
								href={ `#episode__preview__${nextEpisodeNo}` } 
								onClick={ (e) => { 
									handleNavPressed(e, index+1) 
								}}
							>
								Next
							</a>
						)}
						<a 
							href={ `#episode__details__${episodeNo}` }
							onClick={ e => showOverlay(e, false) }
						> 
							Close
						</a>
					</nav>
				</header>
				{ thisOverlayActive && 
					<video
						src={ videoSrc }
					>
					</video>
				}
			</div>	
		</aside>
	);
}// EpisodePreview
