import React, { useContext, useState } from "react";
import {
	EpisodesContext as Episodes,
	setActiveIndex,
	setOverlayActive
} from "COMPONENTS/Episodes";

export default function EpisodePreview(props){

	// CONTEXT
	//-----------------------------
	const {
		activeIndex,
		episodeCount,
		overlayActive,
	} = useContext(Episodes);


	// RENDER
	// ----------------------------
	const { 
		index,
		number,
		title,
		thumbSrc,
		thumbDesc,
		videoSrc
	} = props;

	const previewId = `episode__${number}__preview`;

	// handle visibility of active episode and episode preview overlay
	const isActiveEpisode 	= activeIndex === index;
	const thisOverlayActive = isActiveEpisode && overlayActive;
	const hidden 			= !thisOverlayActive;

	console.log({index}, {isActiveEpisode}, {thisOverlayActive});

	const prevIndex = index - 1;
	const nextIndex = index + 1;

	let prevLink, nextLink;

	if(prevIndex > -1){
		prevLink = 
			<a 
				href={ `#episode__${number-1}__preview` }
				onClick={ (e) => { 
					handleNavPressed(e, prevIndex) 
				}}
			>
				Prev
			
			</a>
		;
	}

	if(nextIndex < episodeCount){
		nextLink =
			<a 
				href={ `#episode__${number+1}__preview` } 
				onClick={ (e) => { 
					handleNavPressed(e, nextIndex) 
				}}
			>
				Next
			
			</a>
		;
	}

	function handleNavPressed(e, newIndex){
		e.preventDefault();

		setActiveIndex(newIndex);
	}// handleNavPressed

	function showOverlay(e){
		e.preventDefault();

		setOverlayActive(true);
	}// showOverlay

	return (
		<aside>
			<a
				href={ videoSrc }
				aria-controls={ previewId }
				onClick={ (e) => { showOverlay(e) } }
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
						{ `Episode ${number}` } 
					</h2>
					<h1>
						{ title }
					</h1>
					<nav>
						{ prevLink }
						{ nextLink }
						<a href={ `#episode__${number}` }> 
							Close
						</a>
					</nav>
				</header>
				<video>
					{/*only render the video when it's activated*/}
				</video>
			</div>	
		</aside>
	);
}// EpisodePreview
