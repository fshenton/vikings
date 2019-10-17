import React from "react";
import { ClientProvider } from "./";
import { NavProvider } from "COMPONENTS/Navigation/";
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
		<ClientProvider>
			<div className={ s.wrapper }>
				
				<NavProvider>
					<HomePermalink />
					<Navigation />
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
		</ClientProvider>
	);
} //App
