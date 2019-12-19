import React, { useContext, useEffect, useState } from "react";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import Link from "COMPONENTS/Link/";
import { s } from "./";

export default function HistoryChannel(){

	// CONTEXT
	// -----------------------------

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
	// ------------------------------

	return (
		<Link
			className={ `${s.history} ${active ? s.active : s.inactive}` }
			destination="https://www.history.co.uk/"
			aria-label="The History Channel"
			aria-hidden={ open }
		>
			<svg className={ s.outline } viewBox="0 0 100 100" preserveAspectRatio="xMidYMin">
				<filter id="powder">
					<feTurbulence baseFrequency="0.2" numOctaves="3"/>
					<feDisplacementMap in="SourceGraphic" scale="5" />
				</filter>
				<path className={ s.circle } fill="none" stroke="#FFF" strokeWidth="1" filter="url(#powder)"
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
