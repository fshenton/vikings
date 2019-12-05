import React, { useContext } from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { s, data } from "./";
import LogoArtwork from "COMPONENTS/LogoArtwork/";
import WatchNow from "COMPONENTS/WatchNow/";
import VideoLayer from "COMPONENTS/VideoLayer/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { ClientContext as Client } from "COMPONENTS/Client/";

export default function Landing(){

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

	//RENDER
	//--------------------------

	const body = RENDER.body(bodyData, {
		scope: "landing", //for key names
		className: s.paragraph 
	}); 

	const isHidden = navIsOpen;

	return(
		<div className={ s.landing }>
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
					aria-hidden={ isHidden }
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
			<div className={ s.glowWrapper }
				 aria-hidden={ isHidden }
			>
				<div className={ `${s.glow} ${s.gold}` }/>
				<div className={ `${s.glow} ${s.blue}`}/>
			</div>
			{ isSmall && 
				<WatchNow
					className={s.watchNow}
				/>
			}
		</div>
	);
}// Landing
