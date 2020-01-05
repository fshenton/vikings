import React, {useContext, useEffect, useState} from "react";
import { RENDER, data, s } from "./";
import { ClientContext as Client } from "COMPONENTS/Client/";

export default function LogoArtwork(props){
	// PROPS
	// --------------------------

	const { className } = props;

	// CONTEXT 
	// --------------------------
	const {
		isFirefox,
		isEdge
	} = useContext(Client).state;

	// STATE AND EFFECTS
	// ---------------------------
	const [active, setActive] = useState(false);

	useEffect(fireTransition, []);

	function fireTransition() {
		const delay = setTimeout(() => {
			setActive(true);
			}, 200);

		return () => clearTimeout(delay);
	}// fireTransition

	// RENDER
	// --------------------------

	const images = data.map(RENDER.images);

	const blurClass = isFirefox ? s.noBlur : s.blur; 

	return (
		<div className={ `
			${s.wrapper} ${blurClass} 
			${className} 
			${active ? s.active : s.inactive}
		` }>
			{ !isEdge && images }
			{ isEdge && 
				<img 
					className={ s.staticLogo }
					src="assets/2d/landing/V-bone.png" 
				/>
			}
		</div>
	);
}// LogoArtwork
