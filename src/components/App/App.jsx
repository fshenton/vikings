import React, { useContext } from "react";
import { ClientContext as Client } from "COMPONENTS/Client/"; 
import HomePermalink from "COMPONENTS/HomePermalink/";
import HistoryChannel from "COMPONENTS/HistoryChannel/";
import WatchNow from "COMPONENTS/WatchNow/";
import Navigation, { NavProvider } from "COMPONENTS/Navigation/";
import Socials from "COMPONENTS/Socials/"
import Landing from "COMPONENTS/Landing/";
import About from "COMPONENTS/About/";
import Characters from "COMPONENTS/Characters/";
import Episodes from "COMPONENTS/Episodes/";
import Fonts from "SHARED/fonts.scss";
import { s } from "./";

export default function App(){

	// CONTEXT
	// -------------------------

	const {
		isSmall,
		isMedium,
		isLarge
	} = useContext(Client).state;


	// RENDER
	// -------------------------

	return (
		<div className={ s.wrapper }>
			{ /* STICKIES */}
			<NavProvider>
				<Navigation /> 
				<HomePermalink /> 
				<Socials /> 
				<HistoryChannel />
				<WatchNow /> 
			</NavProvider>

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
