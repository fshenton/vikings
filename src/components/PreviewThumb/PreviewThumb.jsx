import React, { useContext } from "react";
import { Play as PlayIcon } from "SHARED/icons/";
import PreviewOverlay from "COMPONENTS/PreviewOverlay/";
import { 
	ACTIONS, 
	EpisodesContext as Episodes 
} from "COMPONENTS/Episodes/";
import { NavContext as Nav } from "COMPONENTS/Navigation";
import UTILS from "SHARED/utils.js";
import { s } from "./";

export default function PreviewThumb(props){

	// PROPS
	// --------------------------
	const { 
		episodeId,
		index,
		number: episodeNo,
		title,
		thumbnail: {
			src: {
				small: smallSrc = "",
				medium: mediumSrc = "",
				large: largeSrc =""
			},
			description: thumbDesc
		},
		trailer: {
			src: trailerSrc
		},
		poster: {
			src: posterSrc
		}
	} = props;

	// CONTEXT
	// ----------------------------
	const {
		dispatch
	} = useContext(Episodes);


	const {
		open: isNavOpen
	} = useContext(Nav).state;

	// CLICK HANDLER
	// -----------------------------

	function openOverlay(e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.SHOW_TRAILER,
			value: true
		});
	}// setOverlayActive

	// RENDER
	// ---------------------------
	
	const formattedTitle    = UTILS.convertToSafeString(title, "-");
	const id                = `${formattedTitle}-preview`;
  
	const isHidden = isNavOpen;

	return (
		<aside className={ s.wrapper }>
			<div className={ s.thumbnail }>
				<a
					className= { s.button }
					href={ trailerSrc }
					aria-controls={ id }
					aria-label={ `Watch preview for episode ${episodeNo}: ${title}.` }
					onClick={ openOverlay }
				>
					<picture className={ s.image }>
						<source 
							srcSet={smallSrc} 
							media="(max-width: 767px)"
							alt={thumbDesc}
						/>
						<source 
							srcSet={mediumSrc} 
							media="(min-width: 768px) and (max-width: 1199px)"
							alt={thumbDesc}
						/>
						<source 
							srcSet={largeSrc} 
							media="(min-width: 1200px)"
							alt={thumbDesc}
						/>
						<img 
							src={smallSrc} 
							alt={thumbDesc}
						/>
					</picture>
					<PlayIcon 
						className={ s.icon }
						colour="#cacbca"
						hidden={ isHidden } 
					/>
				</a>
				<div className={ `${s.ghost} ${s.top}` } />
				<div className={ `${s.ghost} ${s.top} ${s.left}` } />
				<div className={ `${s.ghost} ${s.left}` } />
				<div className={ `${s.ghost} ${s.bottom} ${s.left}`} />
				<div className={ `${s.ghost} ${s.bottom}` } />
			</div>
			<PreviewOverlay 
				episodeId={ episodeId }
				index={ index }
				episodeNo={ episodeNo }
				title={ title }
				id={ id }
				trailerSrc={ trailerSrc }
				posterSrc={ posterSrc }
			/>
		</aside>
	);
}// PreviewThumb
