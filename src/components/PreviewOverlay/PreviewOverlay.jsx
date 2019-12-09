import React, { useContext, useState, useRef, useEffect } from "react";
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
		number,
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

	// CLICK HANDLERS
	// -----------------------------
	function setActiveIndex(newIndex, e){
		if(e) e.preventDefault();

		toggleVideo();

		dispatch({
			type: ACTIONS.GET_EPISODE,
			value: newIndex
		});
	}// setActiveIndex

	function closeOverlay(e){
		if(e) e.preventDefault();

		toggleVideo();

		dispatch({
			type: ACTIONS.SHOW_TRAILER,
			value: false
		});
	}// closeOverlay

	// VIDEO STATE
	// ---------------------------------

	const [playing, setPlaying] = useState(false);

	function togglePlaying() {
		if(!playing){
			player.current.play();
			setPlaying(true);
		}
		else {
			player.current.pause();
			setPlaying(false);
		}
	}
	
	// EFFECTS
	// ------------------------------

	const isActiveEpisode   = activeIndex === index;
	const isOverlayActive  	= isActiveEpisode && overlayActive;

	useEffect(toggleVideo, [isOverlayActive]);

	const player = useRef();

	function toggleVideo(){
		if(isOverlayActive) {
			player.current.play();
			setPlaying(true);
		}
		else {
			player.current.pause();
			player.current.currentTime = 0;
			setPlaying(false);
		}
	}// toggleVideo


	// MOUSE ACTIVITY STATE
	// --------------------------------

	const [mouseMoving, setMouseMoving] = useState(true);

	let timer;

	function setInactivityTimer(){
		setMouseMoving(true);

		clearTimeout(timer);
		timer = setTimeout(() => 
			(setMouseMoving(false))
			, 3000);
	}// setTimeout

	// BINDING
	// ------------------------------
	const prevEpisode  = setActiveIndex.bind(this, index - 1);
	const nextEpisode  = setActiveIndex.bind(this, index + 1);

	// RENDER
	// ----------------------------
	const hidden            = !isOverlayActive;
	
	const isFirst           = index === 0;
	const isLast            = index === episodeCount - 1;

	const isPaused 			= true;

	const { src: prevTrailerSrc } = prevTrailer;
	const { src: nextTrailerSrc } = nextTrailer;

	return (
		<div
			id={ id }
			className= { s.wrapper }
			aria-hidden={ hidden }
			onMouseMove={ setInactivityTimer } 
		>
			<header 
				className={ s.container }
			>
				<h2 
					className={ `${s.episode}  ${!mouseMoving ? s.fade : s.visible }` }
				>
					{ `Episode ${number}` } 
				</h2>
				<h1 
					className={ `${s.title}  ${!mouseMoving ? s.fade : s.visible }` }
				>
					{ title }
				</h1>
				<nav>
					{/*NEXT AND PREVIOUS BUTTONS*/}
					<div 
						className={ s.controls }  
						aria-hidden={ !mouseMoving }
					>
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
						aria-hidden={ !mouseMoving }
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
			<div 
				className={ s.pause }
				onClick={ togglePlaying }
				aria-hidden={ !playing || !mouseMoving }
			/>  
			<div 
				className={ s.play }
				onClick={ togglePlaying }
				aria-hidden={ playing || !mouseMoving }
			/> 
			<video 
				ref={ player }
				className={ s.video }
				autoPlay={ true }
				muted={ true } //to reduce annoyance during dev
				loop={ true }
				poster={ posterSrc }
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
