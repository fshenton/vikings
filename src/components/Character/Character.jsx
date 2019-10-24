import React, { useContext } from "react";
import { 
	data as characterData,
	CharactersContext as Characters,
	ACTIONS
} from "COMPONENTS/Characters/";
import HeroImage from "COMPONENTS/HeroImage/";
import { RENDER as CHARACTER_RENDER, s } from "./";
import SHARED_RENDER from "SHARED/renderUtils.jsx";
import UTILS from "SHARED/utils.js";

export default function Character(props){

	//CONTEXT
	//---------------------------
	const { activeIndex } = useContext(Characters).state;


	//RENDER
	//----------------------------
	const RENDER = { ...CHARACTER_RENDER, ...SHARED_RENDER };

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

	return (
		<li
			id={ id }
			className={ s.wrapper } 
			role="group"
			aria-roledescription="slide"
			aria-label={`Character ${index + 1} of ${characterData.length}.`}
			aria-hidden={ hidden }>
			<article className={ s.container }>
				<div className={ s.content }>
					<div className={ s.headings }>
						<h1 
							className={ s.name } 
							id={`character__${id}`}
						>
							{ name }
						</h1>
						<h2 className={ s.nickname } >
							{ nickname }
						</h2>
						<h3 className={ s.actor } >
							{ actor }
						</h3>
					</div>
					<div className={ s.body } > 
						{ body }
					</div>	
				</div>
				<nav className={ s.controls }>
					{ prevButton }
					{ nextButton }
				</nav>	
			</article>
			<HeroImage 
				id={ heroId }
				src={ src } 
				mask={ mask }
				description={ description }
			/>
		</li>
	);
}// Character
