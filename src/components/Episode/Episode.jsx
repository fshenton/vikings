import React, { useContext, useState, useEffect } from "react";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import PreviewThumb from "COMPONENTS/PreviewThumb/";
import WatchNow from "COMPONENTS/WatchNow/";
import { s } from "./";
import RENDER from "SHARED/renderUtils.jsx";

export default function Episode(props){

	//PROPS
	//-------------------------------

	const {
		id,
		index,
		number,
		title,
		synopsis: synopsisData,
		thumbnail = {},
		trailer = {},
		poster = {}
	} = props;

	//CONTEXT
	//---------------------------
	
	const { 
		isSmall 
	} = useContext(Client).state;

	const {
		activeIndex,
		episodeCount
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

	//RENDER
	//---------------------------

	const hidden = index !== activeIndex;

	const synopsis = RENDER.body(synopsisData, {
		scope: "episode", //for key 
		className: s.paragraph
	});

	const isHidden = isNavOpen;	
	const isActive = active && visible;

	return (
		<li
			id={ id }
			className={ s.wrapper }
			role="group"
			aria-roledescription="slide"
			aria-label={ `Episode ${number} of ${episodeCount}.` }
			aria-hidden={ hidden }
		>
			<article className={ s.container }>
				<PreviewThumb 
					episodeId={ id }
					index={ index }
					number={ number }
					title={ title }
					thumbnail={ thumbnail }
					trailer={ trailer }
					poster={ poster }
				/>
				<div className={ `${s.content} ${isActive ? s.active : s.inactive}` }
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
}