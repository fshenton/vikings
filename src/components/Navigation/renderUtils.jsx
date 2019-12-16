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

	const randomDelay = Math.floor(Math.random() * 500);

	const style = {
		transitionDelay: `${randomDelay}ms`
	};

	return (
		<li 
			key={ `navigation__${safeLabel}` }
			className={ s.item }
			style={ style }
		>
			<svg className={ `${s.line} ${s.left}` } viewBox="0, 0, 180, 10">
				<path  
				    strokeWidth="5"
				    stroke="#cacbca" 
					d="M 0,0 h 180"
				    filter="url(#rope)"
				/>
			</svg>
			<svg className={ `${s.line} ${s.right}` } viewBox="0, 0, 180, 10">		
				<path  
				    strokeWidth="5"
				    stroke="#cacbca" 
					d="M 180,0 h -180"
				    filter="url(#rope)"
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
