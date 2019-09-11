import React, { useContext } from "react";
import { 
	data as characters,
	CharactersContext as Characters
} from "COMPONENTS/Characters/";
import { RENDER, s } from "./";

export default function Character(props){

	//CONTEXT
	//---------------------------
	const { activeIndex } = useContext(Characters).get;


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
	const prevCharacter = characters[index-1] || {};
	const nextCharacter = characters[index+1] || {};

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
			aria-label={`Character ${index + 1} of ${characters.length}.`}
			aria-hidden={ hidden }>
			<article>
				<h1 id={`character__${id}`}>
					{ name }
				</h1>
				<h2>
					{ nickname }
				</h2>
				<h3>
					{ actor }
				</h3>
				<p>
					{ body }
				</p>
				<img 
					src={ src } 
					alt={ description }
					style={ mask }
				/>

				{ prevCharName && RENDER.button(prevCharName, -1) }
				{ nextCharName && RENDER.button(nextCharName, +1) }

			</article>
		</li>
	);
}// Character
