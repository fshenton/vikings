import React from "react";
import { RENDER, data, s } from "./";

export default function LogoArtwork(props){

	//PROPS
	//--------------------------

	const { className } = props;

	//RENDER
	//--------------------------

	const images = data.map(RENDER.images);

	return (
		<div className={ `${s.wrapper} ${className}` }>
			{ images }
		</div>
	);
}// LogoArtwork
