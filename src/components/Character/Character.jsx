import React, { useContext } from "react";
import { 
	data as characterData,
	CharactersContext as Characters,
	ACTIONS
} from "COMPONENTS/Characters/";
import { RENDER, s } from "./";

export default function Character(props){

	//CONTEXT
	//---------------------------
	const { activeIndex } = useContext(Characters).state;


	//RENDER
	//----------------------------
	const {
		name,
		nickname,
		actor,
		body,
		image = {},
		index,
		id
	} = props;

	const {
		src,
		mask: maskPath,
		description
	} = image;


	// inline style to prevent the need for a huge png asset
	const mask = { clipPath: `url(${maskPath})` };


	// wrap indexes if less than 0 or greater than number of characters
	let nextIndex = index + 1;
	let prevIndex = index - 1;
	
	if (nextIndex === characterData.length) nextIndex = 0;
	if (prevIndex < 0)                      prevIndex = characterData.length-1;

	const prevCharacter          = characterData[prevIndex];
	const nextCharacter          = characterData[nextIndex];
	const { name: prevCharName } = prevCharacter;
	const { name: nextCharName } = nextCharacter;

	const prevButton = RENDER.button(prevCharName, "Prev", prevIndex);
	const nextButton = RENDER.button(nextCharName, "Next", nextIndex);

	// active character checks
	const hidden = index !== activeIndex;

	//TODO: run body text through shared renderBody once merged. Div body containing p children

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
					<h1 className={ s.name } 
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
					<p className={ s.body } > 
						{ body }
					</p>	
				</div>
				<nav className={ s.controls }>
					{ prevButton }
					{ nextButton }
				</nav>	
			</article>
			<div className={ s.hero } id="hero"> 
				<div className={ s.glow } id="glow"></div>
				<img 
					className={ s.image }
					src={ src } 
					alt={ description }
					style={ mask }
				/>
			</div>
		</li>
	);
}// Character
