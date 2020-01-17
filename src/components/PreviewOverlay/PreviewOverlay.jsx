import React, { useContext, useState, useRef, useEffect } from "react";
import { s } from "./";
import { TrailerContext as Trailer } from "COMPONENTS/Episode/";
import { 
	ACTIONS, 
	EpisodesContext as Episodes 
} from "COMPONENTS/Episodes/";
import { NavContext as Nav } from "COMPONENTS/Navigation";

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
	// ---------------------------
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
	}// togglePlaying

	const [muted, setMuted] = useState(true);

	function toggleMuted() {
		if(!muted){
			// player.current.mute();
			setMuted(true);
		}
		else {
			// player.current.unmute();
			setMuted(false);
		}
	}// toggleMuted
	
	// STATE AND EFFECTS
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

	function setInactivityTimer(){
		setMouseMoving(true);

		clearTimeout(window.focusTimer);
		
		window.focusTimer = setTimeout(() => {
			setMouseMoving(false)
			}, 3000);
	}// setTimeout

	// BINDING
	// ------------------------------
	const prevEpisode  = setActiveIndex.bind(this, index - 1);
	const nextEpisode  = setActiveIndex.bind(this, index + 1);

	// RENDER
	// ----------------------------
	const hidden            = !isOverlayActive;
	const tabIndex			= hidden ? -1 : 0;
	
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
			<header className={ s.container }>
				<h2 className={ `${s.episode}  ${!mouseMoving ? s.fade : s.visible }` }>
					{ `Episode ${number}` } 
				</h2>
				<h1 className={ `${s.title}  ${!mouseMoving ? s.fade : s.visible }` }>
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
								aria-label="Previous."
								href={ prevTrailerSrc }
								onClick={ prevEpisode }
								tabIndex={ tabIndex }
							>
								<span className={ s.prevLabel }>
									Prev
								</span>
							</a>
						)}
						{ !isLast && (
							<a 
								className={ `${s.next} ${s.button}` }
								href={ nextTrailerSrc } 
								onClick={ nextEpisode }
								tabIndex={ tabIndex }
							>
								<span className={ s.nextLabel }>
									Next
								</span>
							</a>
						)}
					</div>
					{/*CLOSE BUTTON*/}
					<a 
						className={ s.close }
						aria-hidden={ !mouseMoving }
						href={ `#${episodeId}` }
						onClick={ closeOverlay }
						tabIndex={ tabIndex }
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
		{/*PLAY & PAUSE BUTTONS*/}
			{ mouseMoving && <div className={ s.contrastOverlay }/> }
			<div 
				className={ s.play }
				aria-controls="episode__preview__video"
				aria-hidden={ playing || !mouseMoving }
				aria-label="play"
				onClick={ togglePlaying }
			/> 
			<div 
				className={ s.pause }
				aria-controls="episode__preview__video"
				aria-hidden={ !playing || !mouseMoving }
				aria-label="pause"
				onClick={ togglePlaying }
			/>  
			<div 
				className={ `${s.volume} ${muted ? s.unmute : s.mute}` }
				aria-controls="episode__preview__video"
				aria-hidden={ !mouseMoving }
				aria-label="mute"
				onClick={ toggleMuted }
			/>  
			<video 
				id="episode__preview__video"
				className={ s.video }
				ref={ player }
				autoPlay={ true }
				loop={ true }
				muted={ muted } 
				playsinline={ true }
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
}// PreviewOverlay
