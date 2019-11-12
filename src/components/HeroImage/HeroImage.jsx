import React from "react";
import { s } from "./";

export default function HeroImage(props){

	const {
		id,
		src,
		mask: maskPath,
		description
	} = props;

	// using mask to prevent the need for a huge png asset
	const mask = { 
		"WebkitMaskImage": `url(${maskPath})`,
		"WebkitMaskSize": "100% 100%",
		"MozMaskImage": `url(${maskPath})`,
		"MozMaskSize": "100% 100%",
		"maskImage": `url(${maskPath})`,
		"maskSize": "100% 100%"
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
