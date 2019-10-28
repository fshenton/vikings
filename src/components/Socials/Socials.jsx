import React, { useContext } from "react";
import { RENDER, s, data } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function Socials(props){

	const { className = "" } = props;

	let hidden;
	if(useContext(Nav) != undefined){ 
		const { open } = useContext(Nav).state;
		hidden = open;
	} else {
		hidden = false;
	}

	const links = data.map(RENDER.item);

	return (
		<ul 
			className={ `${s.wrapper} ${className}` }
			aria-hidden={ hidden }
		>
			{ links }
		</ul>
	);
} //Socials
