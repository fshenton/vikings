import React from "react";
import Link from "COMPONENTS/Link/";
import UTILS from "SHARED/utils.js";
import { s } from "./";

function renderItem(data){

	const { 
		label = "",
		...remainingProps
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);

	return (
		<li 
			key={ `navigation__${safeLabel}` }
			className={ s.item }
		>
			<svg className={ `${s.line} ${s.left}` } viewBox="0, 0, 100, 64">
				<filter id={`${safeLabel}-left-rope`}>
					<feTurbulence baseFrequency="0.2" numOctaves="3"/>
					<feDisplacementMap in="SourceGraphic" scale="5" />
				</filter>				
				<path strokeWidth="8px" fill="none" stroke="white" filter={ `url(#${safeLabel}-left-rope)` } 
				d="
					M 0,28 h 100
				"
				/>
			</svg>
			<svg className={ `${s.line} ${s.right}` } viewBox="0, 0, 100, 64">
				<filter id={`${safeLabel}-right-rope`}>
					<feTurbulence baseFrequency="0.2" numOctaves="3"/>
					<feDisplacementMap in="SourceGraphic" scale="5" />
				</filter>				
				<path strokeWidth="8px" fill="none" stroke="white" filter={ `url(#${safeLabel}-right-rope)` }
				d="
					M 100,28 h -100
				"
				/>
			</svg>
			<Link 
				className={ s.link }
				{ ...remainingProps }
			>
				{ label }
			</Link>
		</li>
	);
}// renderItem

export default {
	item: renderItem
};
