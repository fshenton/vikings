import React from "react";
import { RENDER, data, s } from "./";

export default function LogoArtwork(){

	const images = data.map(RENDER.images);

	return (
		<div className={ s.wrapper }>
			{ images }
		</div>
	);
}// LogoArtwork
