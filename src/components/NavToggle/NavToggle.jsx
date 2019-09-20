import React, { useContext } from "react";
import { s } from "./";
import { 
	NavContext as Nav, 
	ACTIONS 
} from "COMPONENTS/Navigation/";

export default function NavToggle(props){

	const {
		state: {
			open: isOpen
		},
		dispatch
	} = useContext(Nav);

	//EVENT HANDLING
	//---------------------------
	function toggleOpen(e){
		if(e) e.preventDefault();

		dispatch({
			type: ACTIONS.OPEN_NAVIGATION,
			value: !isOpen
		});
	}// toggleOpen

	return (
			<button 
				className={ s.button }
				role="switch"
				aria-checked={ isOpen }
				aria-controls="navigation__links"
				onClick={ toggleOpen }
			>
				<span className={ s.labelContainer }>
					<span 
						className={`${s.label} ${s.open}`}
						aria-hidden="true"
					>
						menu
					</span>
					<span 
						className={`${s.label} ${s.close}`}
						aria-hidden="false"
					>
						close
					</span>
				</span>
			</button>
	)
}