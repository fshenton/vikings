import React, { useContext } from "react";
import { s } from "./";
import { ClientContext as Client } from "COMPONENTS/Client/";

export default function HeroImage(props){
	// PROPS
	// ----------------------------
	const {
		id,
		src: {
			small: smallSrc = "",
			medium: mediumSrc = "",
			large: largeSrc = "",
			nomask: noMask = ""
		},
		mask: {
			small: smallMask = "",
			medium: mediumMask = "",
			large: largeMask = ""
		}, 
		description,
		active,
		faded
	} = props;

	// CONTEXT
	// ----------------------------
	const {
		isSmall,
		isMedium,
		isEdge
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

	// RENDER 
	// --------------------------
	return (
		<div 
			className={ `
				${s.hero} 
				${faded ? s.faded : s.visible} 
				${active ? s.active : s.inactive}
			` } 
			id={ `character__hero__${id}` }
			> 	
			{ !isEdge && 
				<picture className={ s.imageWrapper }>
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
						className={ s.image }
						src={ largeSrc } 
						alt={ description }
						style={ mask }
					/>
				</picture>
			}
			{ isEdge && 
				<img 
					className={ s.noMaskImage }
					alt={ description }
					src={ noMask }
				/>
			}
		</div>
	);
}// HeroImage
