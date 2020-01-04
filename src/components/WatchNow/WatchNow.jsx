import React, { useContext, useEffect, useState } from "react";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import { ClientContext as Client } from "COMPONENTS/Client/";
import Link from "COMPONENTS/Link/";
import { s } from "./";

export default function WatchNow(props){

	// PROPS
	// --------------------------

	const { className = "" } = props;

	// CONTEXT
	// --------------------------
	const { open } = useContext(Nav).state;

	const { isSmall } = useContext(Client).state;

	// STATE AND EFFECTS

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

	return (
		<Link 
			className={ `${s.watch} ${className} ${active ? s.active : s.inactive}` }
			destination="https://www.history.co.uk/shows/vikings"
			aria-hidden={ open || !active }
		>
			Watch Now
		</Link>
	);
}// WatchNow
