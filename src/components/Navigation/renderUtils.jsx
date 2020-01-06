import React, { useContext } from "react";
import UTILS from "SHARED/utils.js";
import { 
	ACTIONS,
	NavContext as Nav,
	s
} from "./";
import Link from "COMPONENTS/Link/";

function renderItem(data){
	// CONTEXT
	// ---------------------------
	const {
		state: {
			open
		},
		dispatch
	} = useContext(Nav);

	// EVENT HANDLING
	// ---------------------------
	function closeNav(e){
		dispatch({
			type: ACTIONS.OPEN_NAVIGATION,
			value: false
		});
	}// closeNav

	const { 
		label = "",
		...remainingProps
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);

	const randomDelay = Math.floor(Math.random() * 500) + 500;

	const style = {
		transitionDelay: `${randomDelay}ms`
	};

	return (
		<li 
			className={ s.item }
			key={ `navigation__${safeLabel}` }
			style={ style }
		>
			<svg 
				className={ `${s.line} ${s.left}` } 
				viewBox="0, 0, 180, 10"
			>
				<path  
				    filter="url(#rope)"
				    stroke="#cacbca" 
				    strokeWidth="5"
					d="M 0,0 h 180"
				/>
			</svg>
			<svg 
				className={ `${s.line} ${s.right}` } 
				viewBox="0, 0, 180, 10"
			>		
				<path  
				    filter="url(#rope)"
				    strokeWidth="5"
				    stroke="#cacbca" 
					d="M 180,0 h -180"
				/>
			</svg>
			<Link 
				className={ s.link }
				onClick={ closeNav }
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
