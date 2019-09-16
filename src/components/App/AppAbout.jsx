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
import { s } from "./";

export default function App(){

	return (
		<div className={ s.pageContainer }>
			<About />
		</div>
	);
} //App

// TAKE WHAT YOU NEED AND THEN DELETE AFTER USE
