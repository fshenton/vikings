import React, { useContext } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import Fonts from "SHARED/fonts.scss";
import { s } from "./";
import About from "COMPONENTS/About/";
import Characters from "COMPONENTS/Characters/";
import { ClientContext as Client } from "COMPONENTS/Client/"; 
import Episodes from "COMPONENTS/Episodes/";
import FixedElements from "COMPONENTS/FixedElements/";
import Landing from "COMPONENTS/Landing/";
import Navigation, { NavProvider, NavContext as Nav} from "COMPONENTS/Navigation/";
import SvgFilters from "COMPONENTS/SvgFilters/";

export default function App(){
	return (
		<div className={ s.wrapper }>
			<NavProvider>
				<Navigation /> 
				<FixedElements />
				<Router>
					<main className={ s.container }>
						<Route exact path={ process.env.PUBLIC_URL + "/" } component={ Landing }/> 
						<Route exact path={ process.env.PUBLIC_URL + "/about" } component={ About }/> 
						<Route exact path={ process.env.PUBLIC_URL + "/characters" } component={ Characters }/> 
						<Route exact path={ process.env.PUBLIC_URL + "/episodes" } component={ Episodes }/> 
					</main>
				</Router>
			</NavProvider>
			<SvgFilters />
		</div>
	);
}// App
