import React, { useContext } from "react";
import {
	ACTIONS,
	EpisodesContext as Episodes,
} from "COMPONENTS/Episodes/";
import { TrailerContext as Trailer } from "COMPONENTS/Episode/";
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
		prev: prevTrailer = {},
		next: nextTrailer = {}
	} = useContext(Trailer);

	const { src: prevTrailerSrc } = prevTrailer;
	const { src: nextTrailerSrc } = nextTrailer;

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
	const isActiveEpisode   = activeIndex === index;
	const isOverlayActive   = isActiveEpisode && overlayActive;
	const hidden            = !isOverlayActive;

	const trailerSrcAttr    = isOverlayActive ? {source: trailerSrc} : {};

	const isFirst           = index === 0;
	const isLast            = index === episodeCount - 1;

	const formattedTitle    = UTILS.convertToSafeString(title, "-");
	const previewId         = `${formattedTitle}-preview`;


	// CLICK HANDLERS
	// -----------------------------
	function setActiveIndex(newIndex, e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: newIndex
		});
	}// changeEpisode

	const prevEpisode  = setActiveIndex.bind(this, index - 1);
	const nextEpisode  = setActiveIndex.bind(this, index + 1);

	
	function setOverlayActive(active, e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.SHOW_TRAILER,
			value: active
		});
	}// setOverlay

	const openOverlay  = setOverlayActive.bind(this, true);
	const closeOverlay = setOverlayActive.bind(this, false);


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
								onClick={ prevEpisode }
							>
								Prev
							</a>
						)}
						{ !isLast && (
							<a 
								href={ nextTrailerSrc } 
								onClick={ nextEpisode }
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
				<video
					{ ...trailerSrcAttr } 
				>
				</video>
			</div>	
		</aside>
	);
}// EpisodePreview
