import React, { useContext } from "react";
import Socials from "COMPONENTS/Socials/";
import NavToggle from "COMPONENTS/NavToggle";
import { 
	RENDER, 
	NavContext as Nav,
	s,
	data,
	ACTIONS
} from "./";

export default function Navigation(){

	//CONTEXT
	//---------------------------
	const {
		state: {
			open
		},
		dispatch
	} = useContext(Nav);


	//RENDER
	//----------------------------
	const links = data.map(RENDER.item);

	const isOpen = open ? s.open : s.closed;

	//EVENT HANDLING
	//---------------------------
	function toggleOpen(e){

		dispatch({
			type: ACTIONS.OPEN_NAVIGATION,
			value: !open
		});
	}// toggleOpen

	return (
		<nav 
			className={ `${s.wrapper} ${isOpen}` }
		>
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
				hidden={ !isOpen }
			/>
		</nav>
	);
}// Navigation
