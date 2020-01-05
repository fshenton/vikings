import React, { useContext, useEffect, useState } from "react";
import { s } from "./";
import Link from "COMPONENTS/Link/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function HistoryChannel(){
	// CONTEXT
	// -----------------------------
	const { open } = useContext(Nav).state;

	// STATE AND EFFECTS
	// -----------------------------
	const [active, setActive] = useState(false);

	useEffect(fireTransition, []);

	function fireTransition() {
		const delay = setTimeout(() => {
			setActive(true);
			}, 200);

		return () => clearTimeout(delay);
	}// fireTransition

	// RENDER 
	// ------------------------------
	const hidden = open || !active;

	return (
		<Link
			className={ `${s.history} ${active ? s.active : s.inactive}` }
			aria-hidden={ hidden }
			aria-label="The History Channel"
			destination="https://www.history.co.uk/"
		>
			<svg 
				className={ s.outline } 
				preserveAspectRatio="xMidYMin"
				viewBox="0 0 100 100"
			>
				<path 
					className={ s.circle } 
					fill="none" 
					filter="url(#powder)"
					stroke="#FFF" 
					strokeWidth="1" 
					d="
				        M 50, 50
				        m 0, -49
				        a 45,45 0 0,1 0,90
				        a -45,-45 0 0,1 0,-90
				    "
				/>
			</svg>
		</Link>
	);
}// HistoryChannel
