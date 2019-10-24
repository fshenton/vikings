import React, { useContext } from "react";
import { RENDER, s, data } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function Socials(props){

	const { className = "" } = props;

	const links = data.map(RENDER.item);

	return (
		<ul className={ `${s.wrapper} ${className}` }>
			{ links }
		</ul>
	);
} //Socials
