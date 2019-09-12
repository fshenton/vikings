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
			<HomePermalink />
			<Socials />
			<HistoryChannel />
			<WatchNow />

			{/* COMMON */}
			<Navigation />

			{/* PAGES */}
			<main>
				<Landing />
				<About />
				<Characters />
				<Episodes />
			</main>

		</div>
	);
} //App
