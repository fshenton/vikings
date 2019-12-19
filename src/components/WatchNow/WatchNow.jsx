import React, { useContext, useEffect, useState } from "react";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import Link from "COMPONENTS/Link/";
import { s } from "./";

export default function WatchNow(props){

	// PROPS
	// --------------------------

	const { className = "" } = props;

	// CONTEXT
	// --------------------------
	const { open } = useContext(Nav).state;

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

	// RENDER
	// --------------------------

	return (
		<Link 
			className={ `${s.watch} ${className} ${active ? s.active : s.inactive}` }
			destination="https://www.history.co.uk/shows/vikings"
			aria-hidden={ open }
		>
			Watch Now
		</Link>
	);
}// WatchNow
