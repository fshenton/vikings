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


	// next & prev button labels
	const prevCharacter = characterData[index - 1] || {};
	const nextCharacter = characterData[index + 1] || {};

	const { name: prevCharName } = prevCharacter;
	const { name: nextCharName } = nextCharacter;


	// active character checks
	const hidden = index !== activeIndex;

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
					<h2 className={ s.nickName } >
						{ nickname }
					</h2>
					<h3 className={ s.actorName } >
						{ actor }
					</h3>
					<p className={ s.bio } > 
						{ body }
					</p>
				</div>
				<img 
					className={ s.hero }
					src={ src } 
					alt={ description }
					style={ mask }
				/>
				<nav className={ s.controls }>
					{ prevCharName && RENDER.button(prevCharName, -1) }
					{ nextCharName && RENDER.button(nextCharName, +1) }
				</nav>
			</article>
		</li>
	);
}// Character
