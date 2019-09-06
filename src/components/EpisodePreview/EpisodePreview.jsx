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
		episodeId,
		index,
		episodeNo,
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
	const isActiveEpisode 	= episodes.get.activeIndex === index;
	const thisOverlayActive = isActiveEpisode && episodes.get.overlayActive;
	const hidden 			= !thisOverlayActive;

	const isFirst 	= index === 0;
	const isLast 	= index === episodes.get.episodeCount - 1;

	const prevEpisodeNo = episodeNo - 1;
	const nextEpisodeNo = episodeNo + 1;

	const previewId = title
		.replace(/\W+/g, '-') // remove non-alphanumeric & replace with -s
		.toLowerCase()
		+"-preview"
		;

	const prevPreviewId = `episode__${prevEpisodeNo}__preview`;
	const nextPreviewId = `episode__${nextEpisodeNo}__preview`;

	function handleNavPressed(e, newIndex){
		e.preventDefault();

		episodes.set.activeIndex(newIndex);
	}// handleNavPressed


	function setOverlay(active, e){
		if(e) e.preventDefault();

		episodes.set.overlayActive(active);
	}// showOverlay

	const openOverlay = setOverlay.bind(this, true);
	const closeOverlay = setOverlay.bind(this, false);

	return (
		<aside>
			<a
				href={ trailerSrc }
				aria-controls={ previewId }
				aria-label={ `Watch preview for episode ${episodeNo}: ${title}.` }
				onClick={ (e) => { openOverlay(e) } }
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
								href={ prevPreviewId }
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
								href={ nextPreviewId } 
								onClick={ (e) => { 
									handleNavPressed(e, index+1) 
								}}
							>
								Next
							</a>
						)}
						<a 
							href={ episodeId }
							onClick={ e => closeOverlay(e) }
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
