import React, { useContext } from "react";
import { s } from "./";
import HomePermalink from "COMPONENTS/HomePermalink/";
import Socials from "COMPONENTS/Socials/";
import HistoryChannel from "COMPONENTS/HistoryChannel/";
import WatchNow from "COMPONENTS/WatchNow/";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function FixedElements() {

	// CONTEXT
	// -------------------------

	const { isSmall } = useContext(Client).state;
	const { open } = useContext(Nav).state;

	return (
		<div className={ s.wrapper }>
			<HomePermalink /> 
			{ 
				!isSmall && 
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
