import React from "react";
import { s } from "./";

export default function NavToggle(props){

	const {
		isOpen,
		openMenu
	} = props;

	//EVENT HANDLING
	//---------------------------
	function toggleOpen(){
		console.log(isOpen);
		openMenu(!isOpen);
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