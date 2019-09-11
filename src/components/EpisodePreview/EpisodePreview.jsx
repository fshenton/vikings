import React, { useContext } from "react";
import {
	ACTIONS,
	EpisodesContext as Episodes,
	TrailersContext as Trailers
} from "COMPONENTS/Episodes";
import UTILS from "SHARED/utils.js";

export default function EpisodePreview(props){

	// CONTEXT
	// ----------------------------
	const {
		state: {
			activeIndex,
			overlayActive,
			episodeCount
		},
		dispatch
	} = useContext(Episodes);

	const {
		prevTrailer: {
			src: prevTrailerSrc
		},
		nextTrailer: {
			src: nextTrailerSrc
		}
	} = useContext(Trailers);

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
		}
	} = props;

	// handle visibility of active episode and episode preview overlay
	const isActiveEpisode 	= activeIndex === index;
	const isOverlayActive   = isActiveEpisode && overlayActive;
	const hidden 			= !isOverlayActive;

	const isFirst 			= index === 0;
	const isLast  			= index === episodeCount - 1;

	const formattedTitle 	= UTILS.convertToSafeString(title, "-");
	const previewId 	 	= `${formattedTitle}-preview`;

	// CLICK HANDLERS
	// -----------------------------
	function handleNavPressed(e, newIndex){
		e.preventDefault();

		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: newIndex
		});
	}// handleNavPressed


	function setOverlay(active, e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.SHOW_TRAILER,
			value: active
		});
	}// setOverlay

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
				{ isOverlayActive && 
					<video
						src={ trailerSrc }
					>
					</video>
				}
			</div>	
		</aside>
	);
}// EpisodePreview
