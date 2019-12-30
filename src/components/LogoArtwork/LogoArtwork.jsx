import React, {useContext, useEffect, useState} from "react";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { RENDER, data, s } from "./";

export default function LogoArtwork(props){

	//PROPS
	//--------------------------

	const { className } = props;

	//CONTEXT 
	//--------------------------

	const {
		isFirefox
	} = useContext(Client).state;

	//STATE AND EFFECTS
	//---------------------------

	const [active, setActive] = useState(false);

	useEffect(fireTransition, []);

	function fireTransition() {
		const delay = setTimeout(() => {
			setActive(true);
		}
		, 200);

		return () => clearTimeout(delay);
	}// fireTransition

	//RENDER
	//--------------------------

	const images = data.map(RENDER.images);

	const blurClass = isFirefox ? s.noBlur : s.blur; 

	return (
		<div className={ `${s.wrapper} ${blurClass} ${className} ${active ? s.active : s.inactive}` }>
			{ images }
		</div>
	);
}// LogoArtwork
