import React, { useContext, useEffect, useState } from "react";
import { s } from "./";
import { ClientContext as Client } from "COMPONENTS/Client/";
import Link from "COMPONENTS/Link/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function WatchNow(props){
	// PROPS
	// --------------------------
	const { className = "" } = props;

	// CONTEXT
	// --------------------------
	const { open } = useContext(Nav).state;

	const { isSmall } = useContext(Client).state;

	// STATE AND EFFECTS
	// --------------------------
	const [active, setActive] = useState(false);

	useEffect(fireTransition, []);

	function fireTransition() {
		const ms = isSmall ? 3800 : 200;

		const delay = setTimeout(() => {
			setActive(true);
		}
		, ms);

		return () => clearTimeout(delay);
	}// fireTransition

	// RENDER
	// --------------------------
	const hidden = open || !active;

	return (
		<Link 
			className={ `${s.watch} ${className} ${active ? s.active : s.inactive}` }
			aria-hidden={ hidden }
			destination="https://www.history.co.uk/shows/vikings"
		>
			Watch Now
		</Link>
	);
}// WatchNow
