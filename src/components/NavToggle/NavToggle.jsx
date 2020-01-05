import React, { useContext, useEffect, useState } from "react";
import { s } from "./";
import { NavContext as Nav } from "COMPONENTS/Navigation/";

export default function NavToggle(props){
	const { callback: toggleOpen } = props;

	// CONTEXT
	// --------------------------
	const {
		state: {
			open: isOpen
		}
	} = useContext(Nav);

	// STATE AND EFFECT
	// ---------------------------
	const [visible, setVisible] = useState(false);
	const [landed, setLanded] = useState(false);

	useEffect(fireOpeningTransitions, [visible]);

	function fireOpeningTransitions(){
		if(visible){
			const delay = setTimeout(()=> {
				setLanded(true);
				}, 500);

			return ()=> { 
				clearTimeout(delay); 
			};
		}
		else {
			const delay = setTimeout(()=> {
				setVisible(true);
				}, 1000);
			
			return ()=> { 
				clearTimeout(delay); 
			};
		}
	}// fireOpeningTransitions

	let buttonClass = "";
	if(visible){
		if(landed) {
			buttonClass = s.resting;
		}
		else {
			buttonClass = s.initial;
		}
	}

	// RENDER
	// ------------------------------
	return (
		<button 
			className={ `${s.wrapper} ${buttonClass}` }
			aria-checked={ isOpen }
			aria-controls="navigation__links"
			aria-hidden={ !visible }
			onClick={ toggleOpen }
			role="switch"
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
}// NavToggle
