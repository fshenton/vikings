import React, { useContext } from "react";
import { s } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function NavToggle(props){

	const { callback: toggleOpen } = props;

	//CONTEXT
	//--------------------------
	const {
		state: {
			open: isOpen
		}
	} = useContext(Nav);

	return (
		<button 
			className={ s.wrapper }
			role="switch"
			aria-checked={ isOpen }
			aria-controls="navigation__links"
			onClick={ toggleOpen }
		>
			<span className={ s.container }>
				<div className={ s.icon }>
				  	<span className={ s.bar }/>
				  	<span className={ s.bar }/>
				</div>
				<span 
					className={`${s.label} ${s.open}`}
					aria-hidden={ isOpen }
				>
					menu
				</span>
				<span 
					className={`${s.label} ${s.close}`}
					aria-hidden={ !isOpen }
				>
					close
				</span>
			</span>
		</button>
	)
}
