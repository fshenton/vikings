import React from "react";
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
				{ true && <Characters /> }
				{ false && <Episodes /> }
			</main>
		</div>
	);
} //App
