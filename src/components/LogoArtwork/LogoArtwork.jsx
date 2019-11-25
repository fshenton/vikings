import React, { useContext } from "react";
import { RENDER, data, s } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function LogoArtwork(props){

	//CONTEXT
	//--------------------------

	const { 
		open: navIsOpen
	} = useContext(Nav).state;

	//PROPS
	//--------------------------

	const { className } = props;

	//RENDER
	//--------------------------

	const images = data.map(RENDER.images);

	const isHidden = navIsOpen;

	return (
		<div className={ `${s.wrapper} ${className}` }
			aria-hidden={ isHidden }
		>
			{ images }
		</div>
	);
}// LogoArtwork
