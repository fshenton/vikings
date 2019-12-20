import React, { useContext, useEffect, useState } from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { s, data } from "./";
import LogoArtwork from "COMPONENTS/LogoArtwork/";
import WatchNow from "COMPONENTS/WatchNow/";
import VideoLayer from "COMPONENTS/VideoLayer/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { ClientContext as Client } from "COMPONENTS/Client/";

export default function Landing(){

	document.title = 'Vikings';

	//CONTEXT
	//--------------------------

	const { 
		open: navIsOpen
	} = useContext(Nav).state;

	const {
		isSmall
	} = useContext(Client).state;

	//DATA
	//----------------------------

	const {
		heading,
		subheading,
		body: bodyData,
		video: {
			foreground: { 
				sources: foregroundSources,
				poster: foregroundPoster
			},
			background: { 
				sources: backgroundSources,
				poster: backgroundPoster
			}
		}
	} = data;

	// STATE AND EFFECTS

	const [active, setActive] = useState(false);

	useEffect(fireTransition, []);

	function fireTransition() {
		const delay = setTimeout(() => {
			setActive(true);
		}
		, 200);

		return () => clearTimeout(delay);
	}// fireTransition

	//RENDER
	//--------------------------

	const body = RENDER.body(bodyData, {
		scope: "landing", //for key names
		className: s.paragraph 
	}); 

	const isHidden = navIsOpen;

	return(
		<div className={ `${s.landing} ${active ? s.active : s.inactive}` }>
			<LogoArtwork 
				className={ s.logo }
			/>
			<VideoLayer 
				className={ s.background }
				sources={ backgroundSources } 
				poster={ backgroundPoster }
			/>
			<VideoLayer 
				className={ s.foreground }
				sources={ foregroundSources } 
				poster={ foregroundPoster }
			/>
			<header className={ s.wrapper }
					aria-hidden={ isHidden || !active }
			>
				<h1 className={ s.heading }>
					{ heading }
				</h1>
				<h2 className={ s.subheading }>
					{ subheading }
				</h2>
				<div className={ s.body }>
					{ body }
				</div>
			</header>
			<div 
				className={ s.glow }
			/>
			{ isSmall && 
				<WatchNow
					className={s.watchNow}
				/>
			}
		</div>
	);
}// Landing
