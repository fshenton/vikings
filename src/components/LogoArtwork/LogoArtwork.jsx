import React from "react";
import { s } from "./";

export default function LogoArtwork(){

	return (
		<div className={ s.wrapper }>
			<img 
				className={ s.logo }
				src="path/to/file.png" alt="" 
			/>
		</div>
	);
}