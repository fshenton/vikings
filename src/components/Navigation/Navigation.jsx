import React, { useContext } from "react";
import { 
	ACTIONS,
	data,
	NavContext as Nav,
	RENDER, 
	s
} from "./";
import NavToggle from "COMPONENTS/NavToggle";
import Socials from "COMPONENTS/Socials/";

export default function Navigation(){
	// CONTEXT
	// ---------------------------
	const {
		state: {
			open
		},
		dispatch
	} = useContext(Nav);

	// EVENT HANDLING
	// ---------------------------
	function toggleOpen(e){

		dispatch({
			type: ACTIONS.OPEN_NAVIGATION,
			value: !open
		});
	}// toggleOpen
	
	// RENDER
	// ----------------------------
	const links = data.map(RENDER.item);

	const isOpen = open ? s.open : s.closed;

	return (
		<nav className={ `${s.wrapper} ${isOpen}` }>
			<div 
				className={ s.overlay } 
				onClick={ toggleOpen }
			/>
			<NavToggle callback={ toggleOpen }/>
			<ul 
				id="navigation__links"
				className={ s.container }
				aria-expanded={ open }
			>
				{ links }
			</ul>
			<Socials 
				className={ s.socials }
				hidden={ !open }
			/>
		</nav>
	);
}// Navigation
