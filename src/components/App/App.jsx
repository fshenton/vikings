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

export default function App(){

	return (
		<div>
			{ /* STICKIES */}
			{ false && <HomePermalink /> }
			{ false && <Socials /> }
			{ false && <HistoryChannel /> }
			{ false && <WatchNow /> }

			{/* COMMON */}
			{ false && <Navigation /> }

			{/* PAGES */}
			<main>
				{ false && <Landing /> }
				{ true && <About /> }
				{ false && <Characters /> }
				{ false && <Episodes /> }
			</main>

		</div>
	);
} //App
