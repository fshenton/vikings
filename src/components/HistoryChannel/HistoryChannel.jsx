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
				<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMin">
					<path className={ s.circle } fill="none" stroke="#FFF" strokeWidth="2"
						d="
					        M 50, 50
					        m -48, 0
					        a 48,48 0 1,0 96,0
					        a 48,48 0 1,0 -96,0
					    "
					/>
				</svg>
			</Link>
		);
	}
}// HistoryChannel
