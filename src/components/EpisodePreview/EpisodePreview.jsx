import React, { useContext } from "react";
import {
	ACTIONS,
	EpisodesContext as Episodes,
} from "COMPONENTS/Episodes/";
import { TrailerContext as Trailer } from "COMPONENTS/Episode/";
import { s } from "./";
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


	// PROPS
	// --------------------------
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


	// CLICK HANDLERS
	// -----------------------------
	function setActiveIndex(newIndex, e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: newIndex
		});
	}// changeEpisode


	function setOverlayActive(active, e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.SHOW_TRAILER,
			value: active
		});
	}// setOverlay


	// BINDING
	// ------------------------------
	const prevEpisode  = setActiveIndex.bind(this, index - 1);
	const nextEpisode  = setActiveIndex.bind(this, index + 1);
	
	const openOverlay  = setOverlayActive.bind(this, true);
	const closeOverlay = setOverlayActive.bind(this, false);

	
	// RENDER LOGIC
	// ----------------------------
	// handle visibility of active episode and episode preview overlay
	const isActiveEpisode   = activeIndex === index;
	const isOverlayActive   = isActiveEpisode && overlayActive;
	const hidden            = !isOverlayActive;

	const isFirst           = index === 0;
	const isLast            = index === episodeCount - 1;

	const formattedTitle    = UTILS.convertToSafeString(title, "-");
	const previewId         = `${formattedTitle}-preview`;

	const { src: prevTrailerSrc } = prevTrailer;
	const { src: nextTrailerSrc } = nextTrailer;

	return (
		<aside className={ s.wrapper }>
			<div className={ s.thumbnail }>
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
					<svg className={ s.playButton } 
						 viewBox="0 0 200 200" 
						 alt="Play video">
	                    <circle cx="100" cy="100" r="90" fill="none" strokeWidth="15" stroke="#fff"/>\
	                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                	</svg>
				</a>
			</div>
			<div
				id={ previewId }
				className= { s.content }
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
				<video>
					{ isOverlayActive && (
						<source 
							src={trailerSrc}
							type="video/mp4"
						/>
					)}
				</video>
			</div>	
		</aside>
	);
}// EpisodePreview
