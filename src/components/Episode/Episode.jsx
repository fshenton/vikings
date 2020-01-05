import React, { useContext, useState, useEffect } from "react";
import RENDER from "SHARED/renderUtils.jsx";
import UTILS from "SHARED/utils.js";
import { s } from "./";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import PreviewOverlay from "COMPONENTS/PreviewOverlay/";
import PreviewThumb from "COMPONENTS/PreviewThumb/";
import WatchNow from "COMPONENTS/WatchNow/";

export default function Episode(props){
	// PROPS
	// -------------------------------
	const {
		id,
		index,
		number,
		poster: {
			src: posterSrc
		},
		synopsis: synopsisData,
		thumbnail = {},
		title,
		trailer: {
			src: trailerSrc
		}
	} = props;

	// CONTEXT
	// ---------------------------
	const { 
		isSmall 
	} = useContext(Client).state;

	const {
		activeIndex,
		episodeCount,
		overlayActive
	} = useContext(Episodes).state;

	const { 
		open: isNavOpen
	} = useContext(Nav).state;

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
		
		return ()=> { clearTimeout(delay) };
	}

	// RENDER
	// ---------------------------
	const hidden = index !== activeIndex;

	const synopsis = RENDER.body(synopsisData, {
		scope: "episode", //for key 
		className: s.paragraph
	});

	const formattedTitle    = UTILS.convertToSafeString(title, "-");
	const formattedId       = `${formattedTitle}-preview`;

	const isHidden = isNavOpen;	
	const isActive = active && visible && !overlayActive;

	return (
		<li
			id={ id }
			className={ s.wrapper }
			aria-hidden={ hidden }
			aria-label={ `Episode ${number} of ${episodeCount}.` }
			aria-roledescription="slide"
			role="group"
		>
			<article className={ s.container }>
				<PreviewThumb 
					episodeId={ id }
					controls={ formattedId }
					index={ index }
					number={ number }
					thumbnail={ thumbnail }
					title={ title }
					trailerSrc={ trailerSrc }
				/>
				<PreviewOverlay 
					episodeId={ id }
					id={ formattedId }
					index={ index }
					number={ number }
					posterSrc={ posterSrc }
					title={ title }
					trailerSrc={ trailerSrc }
				/>
				<div 
					className={ `${s.content} ${isActive ? s.active : s.inactive}` }
					aria-hidden={ isHidden }
				>
					<h1 className={ s.title }>
						{ title }
					</h1>
					<h2 className={ s.episode }>
						Episode { number }
					</h2>
					<div className={ s.body }>
						{ synopsis }
					</div>
					<div className={ s.fade } />
				</div>
			</article>
		</li>
	);
}// Episodes
