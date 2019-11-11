import React from "react";
import { s } from "./";

export default function HeroImage(props){

	const {
		id,
		src,
		mask: maskPath,
		description
	} = props;

	// inline style to prevent the need for a huge png asset
	const mask = { 
		"-webkit-mask-image": `url(${maskPath})`,
		"-webkit-mask-size": "100% 100%",
		"-moz-mask-image": `url(${maskPath})`,
		"-moz-mask-size": "100% 100%",
		"mask-image": `url(${maskPath})`,
		"mask-size": "100% 100%"
	};

	return (
		<div 
			className={ s.hero } 
			id={ `character__hero__${id}` }
			> 	
			<img 
				className={ s.image }
				src={ src } 
				alt={ description }
				style={ mask }
			/>
			<div className={ s.glow } id="character__hero__glow"></div>
		</div>
	);
}// HeroImage
