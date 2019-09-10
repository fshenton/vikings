import React, { useContext } from "react";
import {
	EpisodesContext as Episodes
} from "COMPONENTS/Episodes";
import UTILS from "SHARED/utils.js";

export default function EpisodePreview(props){

	// CONTEXT
	// ----------------------------
	const {
		get: {
			episodeCount,
			activeIndex,
			overlayActive
		},
		set: {
			activeIndex: setActiveIndex,
			overlayActive: setOverlayActive
		}
	} = useContext(Episodes);

	// RENDER
	// ----------------------------
	const { 
		episodeId,
		index,
		number: episodeNo,
		title,
		thumbnail: {
			src: thumbSrc,
			description: thumbDesc
		},
		trailer: {
			src: trailerSrc
		},
		prevTrailer: {
			src: prevTrailerSrc
		},
		nextTrailer: {
			src: nextTrailerSrc
		}
	} = props;

	// handle visibility of active episode and episode preview overlay
	const isActiveEpisode 	= activeIndex === index;
	const thisOverlayActive = isActiveEpisode && overlayActive;
	const hidden 			= !thisOverlayActive;

	const isFirst 	= index === 0;
	const isLast 	= index === episodeCount - 1;

	const prevEpisodeNo = episodeNo - 1;
	const nextEpisodeNo = episodeNo + 1;

	const previewId = UTILS.convertToHyphenatedString(title) + "-preview";


	// CLICK HANDLERS
	// -----------------------------
	function handleNavPressed(e, newIndex){
		e.preventDefault();

		setActiveIndex(newIndex);
	}// handleNavPressed


	function setOverlay(active, e){
		if(e) e.preventDefault();

		setOverlayActive(active);
	}// showOverlay

	const openOverlay = setOverlay.bind(this, true);
	const closeOverlay = setOverlay.bind(this, false);

	return (
		<aside>
			<a
				href={ trailerSrc }
				aria-controls={ previewId }
				aria-label={ `Watch preview for episode ${episodeNo}: ${title}.` }
				onClick={ openOverlay }
			>
				<img
					src={ thumbSrc }
					alt={ thumbDesc }
				/>
			</a>
			<div
				id={ previewId }
				aria-hidden={ hidden.toString() }
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
								href={ prevTrailerSrc }
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
								href={ nextTrailerSrc } 
								onClick={ (e) => { 
									handleNavPressed(e, index+1) 
								}}
							>
								Next
							</a>
						)}
						<a 
							href={ `#${episodeId}` }
							onClick={ closeOverlay }
						> 
							Close
						</a>
					</nav>
				</header>
				{ thisOverlayActive && 
					<video
						src={ trailerSrc }
					>
					</video>
				}
			</div>	
		</aside>
	);
}// EpisodePreview
