import React, { useContext, useEffect } from "react";
import { 
	ClientContext as Client,
	ACTIONS 
} from "COMPONENTS/Client/";
import HomePermalink from "COMPONENTS/HomePermalink/";
import HistoryChannel from "COMPONENTS/HistoryChannel/";
import WatchNow from "COMPONENTS/WatchNow/";
import Navigation from "COMPONENTS/Navigation/";
import Socials from "COMPONENTS/Socials/"
import Landing from "COMPONENTS/Landing/";
import About from "COMPONENTS/About/";
import Characters from "COMPONENTS/Characters/";
import Episodes from "COMPONENTS/Episodes/";
import Fonts from "SHARED/fonts.scss";
import { s } from "./";

export default function App(){

	// CONTEXT
	// ------------------------

	const {
		state: {
			isSmall //defaults true, before mounted
		},
		dispatch
	} = useContext(Client);


	// EFFECTS
	// ------------------------

	//set device dimensions on mount
	useEffect(syncViewSize, []); 

	//add/remove resize listeners
	useEffect(updateResizeListeners, []);

	function updateResizeListeners(){
		window.addEventListener("resize", syncViewSize);
		return () => {
			window.removeEventListener("resize", syncView)
		};
	}// updateResizeListeners


	function syncViewSize(){
		dispatch({
			type: ACTIONS.UPDATE_VIEW_SIZE
		});
	}// syncViewSize

	return (
		<div className={ s.wrapper }>
			{ /* STICKIES */}
			{ false && <HomePermalink /> }
			{ false && <Socials /> }
			{ false && <HistoryChannel /> }
			{ false && <WatchNow /> }

			{/* COMMON */}
			{ false && <Navigation /> }

			{/* PAGES */}
			<main className={ s.container }>
				{ false && <Landing /> }
				{ false && <About /> }
				{ false && <Characters /> }
				{ true && <Episodes /> }
			</main>
		</div>
	);
} //App
