import React from "react";
import { s } from "./";

export default function LogoArtwork(){

	return (
		<div className={ s.wrapper }>
			<img 
				className={ s.logo }
				src="path/to/file.png" 
				alt="Vikings Logo; an ornate 'V' carved out of wood." 
			/>
		</div>
	);
}// LogoArtwork
