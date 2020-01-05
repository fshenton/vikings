import React, { useContext } from "react";
import { s } from "./";
import { ClientContext as Client } from "COMPONENTS/Client/";
import HistoryChannel from "COMPONENTS/HistoryChannel/";
import HomePermalink from "COMPONENTS/HomePermalink/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import Socials from "COMPONENTS/Socials/";
import WatchNow from "COMPONENTS/WatchNow/";

export default function FixedElements() {
	// CONTEXT
	// -------------------------
	const { isSmall } = useContext(Client).state;
	const { open } = useContext(Nav).state;

	// RENDER
	// -------------------------
	return (
		<div className={ s.wrapper }>
			<HomePermalink /> 
			{ !isSmall && 
				<Socials 
					className={ s.socials }
					hidden={ open }
				/> 
			}
			{ !isSmall && <HistoryChannel /> }
			{ !isSmall && <WatchNow /> }
		</div>
	);
}// FixedElements
