import React, { useContext, useState, useEffect } from "react";
import { Play as PlayIcon } from "SHARED/icons/";
import { s } from "./";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { 
	ACTIONS, 
	EpisodesContext as Episodes 
} from "COMPONENTS/Episodes/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import PreviewOverlay from "COMPONENTS/PreviewOverlay/";

export default function PreviewThumb(props){
	// PROPS
	// --------------------------
	const { 
		controls,
		episodeId,
		index,
		number: episodeNo,
		thumbnail: {
			src: {
				small: smallSrc = "",
				medium: mediumSrc = "",
				large: largeSrc =""
			},
			description: thumbDesc
		},
		title,
		trailerSrc
	} = props;

	// CONTEXT
	// ----------------------------
	const {
		state: {
			activeIndex,
			overlayActive
		},
		dispatch,
	} = useContext(Episodes);

	const {
		open: isNavOpen
	} = useContext(Nav).state;

	const { isFirefox } = useContext(Client).state;

	// STATE & EFFECT
	// -----------------------------
	const [visible, setVisible] = useState(false);

	const active = index === activeIndex;

	useEffect(fireTransition, [active]);

	function fireTransition(){
		let ms = 0;
		const delay = setTimeout(()=> {
				setVisible(active);
				ms = active ? 200 : 0;
			}, ms);
		
		return () => { clearTimeout(delay) };
	}

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
	const isHidden = isNavOpen;
	const isActive = active && visible && !overlayActive;

	const faded    = isHidden && isFirefox ? s.faded : s.visible;

	return (
		<aside className={ `${s.wrapper} ${isActive ? s.active : s.inactive}` }>
			<div className={ s.thumbnail }>
				<a
					className= { s.button }
					aria-controls={ controls }
					aria-label={ `Watch preview for episode ${episodeNo}: ${title}.` }
					href={ trailerSrc }
					onClick={ openOverlay }
				>
					<picture className={ `${s.image} ${faded}` }>
						<source 
							alt={thumbDesc}
							media="(max-width: 767px)"
							srcSet={smallSrc} 
						/>
						<source 
							alt={thumbDesc}
							media="(min-width: 768px) and (max-width: 1199px)"
							srcSet={mediumSrc} 
						/>
						<source 
							alt={thumbDesc}
							media="(min-width: 1025px)"
							srcSet={largeSrc} 
						/>
						<img 
							alt={thumbDesc}
							src={smallSrc} 
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
		</aside>
	);
}// PreviewThumb
