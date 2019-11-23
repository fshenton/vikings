import React from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { s, data } from "./";
import LogoArtwork from "COMPONENTS/LogoArtwork/";
import WatchNow from "COMPONENTS/WatchNow/";
import VideoLayer from "COMPONENTS/VideoLayer/";

export default function Landing(){

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

	const body = RENDER.body(bodyData, {
		scope: "landing", //for key names
		className: s.paragraph 
	}); 

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
			<header className={ s.wrapper }>
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
			<div className={ s.glowWrapper }>
				<div className={ `${s.glow} ${s.gold}` }/>
				<div className={ `${s.glow} ${s.blue}`}/>
			</div>
		</div>
	);
}// Landing
