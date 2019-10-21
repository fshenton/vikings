import React, { useContext } from "react";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";
import { TrailerContext as Trailer } from "COMPONENTS/Episode/";
import { s } from "./";

export default function PreviewOverlay(props){
	
	// PROPS
	// ---------------------------
	const {
		episodeId,
		index,
		episodeNo,
		title,
		previewId,
		trailerSrc,
		prevEpisode, //bound callback
		nextEpisode, //bound callback
		closeOverlay //bound callback
	} = props;

	const {
		prev: prevTrailer = {},
		next: nextTrailer = {}
	} = useContext(Trailer);


	// CONTEXT
	// ----------------------------
	const {
		activeIndex,
		overlayActive,
		episodeCount
	} = useContext(Episodes).state;

	// RENDER LOGIC
	// ----------------------------
	// handle visibility of active episode and episode preview overlay
	const isActiveEpisode   = activeIndex === index;
	const isOverlayActive   = isActiveEpisode && overlayActive;
	const hidden            = !isOverlayActive;
	
	const isFirst           = index === 0;
	const isLast            = index === episodeCount - 1;

	const { src: prevTrailerSrc } = prevTrailer;
	const { src: nextTrailerSrc } = nextTrailer;


	return (
		<div
			id={ previewId }
			className= { s.container }
			aria-hidden={ hidden }
		>
			<header className={ s.details }>
				<h2 className={ s.episode }>
					{ `Episode ${episodeNo}` } 
				</h2>
				<h1 className={ s.title }>
					{ title }
				</h1>
				<nav>
					{/*NEXT AND PREVIOUS BUTTONS*/}
					<div className={ s.controls }>
						{ !isFirst && (
							<a 
								className={ `${s.prev} ${s.button}` }
								href={ prevTrailerSrc }
								aria-label="Previous."
								onClick={ prevEpisode }
							>
								Prev
							</a>
						)}
						{ !isLast && (
							<a 
								className={ `${s.next} ${s.button}` }
								href={ nextTrailerSrc } 
								onClick={ nextEpisode }
							>
								Next
							</a>
						)}
					</div>
					{/*CLOSE BUTTON*/}
					<a 
						className={ s.close }
						href={ `#${episodeId}` }
						onClick={ closeOverlay }
					> 
						<span className={ s.label }> 
							Close
						</span> 
						<div className={ s.icon }>
							<div className={ `${s.bar} ${s.bar1}` } />
							<div className={ `${s.bar} ${s.bar2}` } />
						</div>
					</a>
				</nav>
			</header>
			<video className={ s.video }>
				{ isOverlayActive && (
					<source 
						src={trailerSrc}
						type="video/mp4"
					/>
				)}
			</video>
		</div>	
	);
}
