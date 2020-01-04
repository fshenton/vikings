import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "COMPONENTS/About/";
import Characters from "COMPONENTS/Characters/";
import { ClientContext as Client } from "COMPONENTS/Client/"; 
import Episodes from "COMPONENTS/Episodes/";
import FixedElements from "COMPONENTS/FixedElements/";
import Landing from "COMPONENTS/Landing/";
import Navigation, { NavProvider, NavContext as Nav} from "COMPONENTS/Navigation/";
import SvgFilters from "COMPONENTS/SvgFilters/";
import Fonts from "SHARED/fonts.scss";
import { s } from "./";

export default function App(){
	return (
		<div className={ s.wrapper }>
			<NavProvider>
				<Navigation /> 
				<FixedElements />
				<Router>
					<main className={ s.container }>
						<Route path="/" exact component={ Landing }/> 
						<Route path="/about" exact component={ About }/> 
						<Route path="/characters" exact component={ Characters }/> 
						<Route path="/episodes" exact component={ Episodes }/> 
					</main>
				</Router>
			</NavProvider>
			<SvgFilters />
		</div>
	);
}// App
