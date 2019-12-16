import React, { useContext } from "react";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { s } from "./";

export default function HeroImage(props){

	//PROPS
	//----------------------------

	const {
		id,
		src: {
			small: smallSrc = "",
			medium: mediumSrc = "",
			large: largeSrc = ""
		},
		mask: {
			small: smallMask = "",
			medium: mediumMask = "",
			large: largeMask = ""
		}, 
		description,
		active
	} = props;

	//CONTEXT
	//----------------------------

	const {
		isSmall,
		isMedium
	} = useContext(Client).state;

	let maskPath;

	if(isSmall) {
		maskPath = smallMask;
	}
	else if (isMedium) {
		maskPath = mediumMask;
	}
	else {
		maskPath = largeMask;
	}

	// using mask to prevent the need for a huge png asset
	const mask = { 
		"WebkitMaskImage": `url(${maskPath})`,
		"MozMaskImage": `url(${maskPath})`,
		"maskImage": `url(${maskPath})`,
	};

	return (
		<div 
			className={ `${s.hero} ${active ? s.active : s.inactive}` } 
			id={ `character__hero__${id}` }
			> 	
			<picture className={ s.image }>
				<source 
					srcSet={smallSrc} 
					media="(max-width: 767px)"
					alt={description}
				/>
				<source 
					srcSet={mediumSrc} 
					media="(min-width: 768px) and (max-width: 1024px)"
					alt={description}
				/>
				<source 
					srcSet={largeSrc} 
					media="(min-width: 1025px)"
					alt={description}
				/>		
				<img 
					src={ largeSrc } 
					alt={ description }
					style={ mask }
				/>
			</picture>
		</div>
	);
}// HeroImage
