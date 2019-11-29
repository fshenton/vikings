import React, { useContext } from "react";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { EpisodesContext as Episodes } from "COMPONENTS/Episodes/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import PreviewThumb from "COMPONENTS/PreviewThumb/";
import WatchNow from "COMPONENTS/WatchNow/";
import { s } from "./";
import RENDER from "SHARED/renderUtils.jsx";

export default function Episode(props){

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

	//RENDER
	//---------------------------
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

	const hidden = index !== activeIndex;

	const synopsis = RENDER.body(synopsisData, {
		scope: "episode", //for key 
		className: s.paragraph
	});

	const textHidden = isNavOpen;	

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
				<div className={ s.content }
					 aria-hidden={ textHidden }
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
					{ isSmall && 
						<WatchNow
							className={ s.watchNow }
						/>
					}
				</div>
			</article>
		</li>
	);
}