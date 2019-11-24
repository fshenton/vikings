import React, { useContext } from "react";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import Link from "COMPONENTS/Link/";
import { s } from "./";

export default function HistoryChannel(){

	// CONTEXT
	// -----------------------------

	const { open } = useContext(Nav).state;

	// RENDER 
	// ------------------------------

	if(open) return null;
	else {
		return (
			<Link
				className={ s.history }
				destination="https://www.history.co.uk/"
				aria-label="The History Channel"
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
					        a 49,49 0 1,0 0,98
					        a -49,-49 0 1,0 0,-98
					    "
					/>
				</svg>
			</Link>
		);
	}
}// HistoryChannel
