import React, { useContext } from "react";
import { 
	ACTIONS, 
	EpisodesContext as Episodes 
} from "COMPONENTS/Episodes/";
import { TrailerContext as Trailer } from "COMPONENTS/Episode/";
import { NavContext as Nav } from "COMPONENTS/Navigation";
import { s } from "./";

export default function PreviewOverlay(props){
	
	// PROPS
	// ---------------------------
	const {
		episodeId,
		index,
		episodeNo,
		title,
		id,
		trailerSrc,
		posterSrc
	} = props;

	// CONTEXT
	// ----------------------------

	const {
		prev: prevTrailer = {},
		next: nextTrailer = {}
	} = useContext(Trailer);

	const {
		state: {
			activeIndex,
			overlayActive,
			episodeCount
		},
		dispatch
	} = useContext(Episodes);

	const {
		open: isNavOpen
	} = useContext(Nav).state;

	// CLICK HANDLERS
	// -----------------------------
	function setActiveIndex(newIndex, e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: newIndex
		});
	}// setActiveIndex

	function closeOverlay(e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.SHOW_TRAILER,
			value: false
		});
	}// closeOverlay

	// BINDING
	// ------------------------------
	const prevEpisode  = setActiveIndex.bind(this, index - 1);
	const nextEpisode  = setActiveIndex.bind(this, index + 1);

	// RENDER
	// ----------------------------
	// handle visibility of active episode and episode preview overlay
	const isActiveEpisode   = activeIndex === index;
	const isOverlayActive   = isActiveEpisode && overlayActive;
	const hidden            = !isOverlayActive;
	
	const isFirst           = index === 0;
	const isLast            = index === episodeCount - 1;

	const { src: prevTrailerSrc } = prevTrailer;
	const { src: nextTrailerSrc } = nextTrailer;

	const hiddenByNav = isNavOpen;

	return (
		<div
			id={ id }
			className= { s.wrapper }
			aria-hidden={ hidden }
		>
			<header className={ s.container }
					aria-hidden={ hiddenByNav }
			>
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
			<video 
				className={ s.video }
				autoPlay={ true }
				muted={true } //to reduce annoyance during dev
				loop={ true }
				poster={ posterSrc }
				controls
			>
				{ isOverlayActive && (
					<source 
						src={ trailerSrc }
						type="video/mp4"
					/>
				)}
			</video>
		</div>	
	);
}
