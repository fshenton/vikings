import React, {useEffect, useState} from "react";
import { RENDER, data, s } from "./";

export default function LogoArtwork(props){

	//PROPS
	//--------------------------

	const { className } = props;

	// STATE AND EFFECTS

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

	return (
		<div className={ `${s.wrapper} ${className} ${active ? s.active : s.inactive}` }>
			{ images }
		</div>
	);
}// LogoArtwork
