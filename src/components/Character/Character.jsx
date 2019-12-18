import React, { useContext, useState, useEffect } from "react";
import { 
	data as characterData,
	CharactersContext as Characters,
	ACTIONS
} from "COMPONENTS/Characters/";
import { NavContext as Nav } from "COMPONENTS/Navigation/";
import HeroImage from "COMPONENTS/HeroImage/";
import { ClientContext as Client } from "COMPONENTS/Client/";
import { RENDER as CHARACTER_RENDER, s } from "./";
import SHARED_RENDER from "SHARED/renderUtils.jsx";
import UTILS from "SHARED/utils.js";

export default function Character(props){

	//PROPS
	//---------------------------
	const {
		name,
		nickname,
		actor,
		body: bodyData,
		image:{
			src,
			mask,
			description
		} = {},
		index,
		id
	} = props;

	//CONTEXT
	//---------------------------
	const { activeIndex } = useContext(Characters).state;

	const { 
		open: isNavOpen 
	} = useContext(Nav).state;

	const {
		isSmall
	} = useContext(Client).state;

	//STATE AND EFFECT
	//---------------------------

	useEffect(resetScroll, [activeIndex]);

	function resetScroll() {
		const scrollTimer = setTimeout( () => {
			window.scrollTo({
				top: 0
			});
		}, 500);

		return () => clearTimeout(scrollTimer);
	}// resetScroll

	//ENTER TRANSITIONS
	const [visible, setVisible] = useState(false);

	const active = index === activeIndex;

	useEffect(fireTransition, [active]);

	function fireTransition(){
		let ms = 0;
		const delay = setTimeout(()=> {
				setVisible(active);
				ms = active ? 200 : 0;
			}, ms);
		
		return ()=> { clearTimeout(delay) };
	}


	//SCROLL FADE FOR MOBILE
	const [atTop, setAtTop] = useState(true);

	useEffect(addScrollListeners, []);

	function addScrollListeners() {
		window.addEventListener("scroll", checkIfAtTop);

		return () => window.removeEventListener("scroll", checkIfAtTop);
	}// addScrollListeners

	function checkIfAtTop(event) {
		const { scrollY } = window;

		const topBuffer = 5;

		const scrollAtTop = scrollY < topBuffer;

		setAtTop(scrollAtTop);
	}// checkIfAtTop


	//RENDER
	//----------------------------
	const RENDER = { ...CHARACTER_RENDER, ...SHARED_RENDER };

	// wrap indexes if less than 0 or greater than number of characters
	let nextIndex = index + 1;
	let prevIndex = index - 1;
	
	if (nextIndex === characterData.length) nextIndex = 0;
	if (prevIndex < 0)                      prevIndex = characterData.length-1;

	const prevCharacter          = characterData[prevIndex];
	const nextCharacter          = characterData[nextIndex];
	const { name: prevCharName } = prevCharacter;
	const { name: nextCharName } = nextCharacter;

	const prevButton = RENDER.button(prevCharName, "prev", prevIndex);
	const nextButton = RENDER.button(nextCharName, "next", nextIndex);

	// active character checks
	const hidden = index !== activeIndex;

	const body = RENDER.body(bodyData, {
		scope: "character", //for key names
		className: s.paragraph
	});

	const heroId = UTILS.convertToSafeString(`${name} ${nickname}`);

	const isHidden = isNavOpen;

	const isActive = active && visible;

	let nicknameClass = "";
	if(nickname === " "){
		nicknameClass = s.none;
	}

	return (
		<li
			id={ id }
			className={ `${s.wrapper} ${isActive ? s.active : s.inactive}`} 
			role="group"
			aria-roledescription="slide"
			aria-label={`Character ${index + 1} of ${characterData.length}.`}
			aria-hidden={ hidden }>
			<article className={ s.container }
				aria-hidden={ isHidden }
			>
				<div className={ s.content }>
					<div className={ s.headings }>
						<h1 
							className={ s.name } 
							id={`character__${id}`}
						>
							{ name }
						</h1>
						<h2 className={ `${s.nickname} ${nicknameClass}` }>
							{ nickname }
						</h2>
						<h3 className={ s.actor } >
							{ actor }
						</h3>
					</div>
					<div className={ s.scrollHider }>
						<div className={ s.body } > 
							{ body }
						</div>	
					</div>
				</div>
				<nav 
					className={ s.controls }
					aria-hidden={ !isActive }
				>
					{ prevButton }
					{ nextButton }
				</nav>	
			</article>
			<HeroImage 
				id={ heroId }
				src={ src } 
				mask={ mask }
				description={ description }
				active={ isActive }
				faded={ isSmall && !atTop }
			/>
		</li>
	);
}// Character
