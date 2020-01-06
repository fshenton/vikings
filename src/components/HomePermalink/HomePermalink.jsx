import React, { useContext, useEffect, useState } from "react";
import { s } from "./";
import Link from "COMPONENTS/Link/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function HomePermalink(){
	// CONTEXT
	// -------------------------
	const { open } = useContext(Nav).state;

	// STATE AND EFFECTS
	// -------------------------
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
	return (
		<Link
			className={ `${s.home} ${active ? s.active : s.inactive}` } 
			destination="#/"
			aria-label="Home."
			aria-hidden={ open || !active }
		/>
	);
}// HomePermalink
