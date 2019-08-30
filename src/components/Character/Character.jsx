import React from "react";
import { data as characters } from "COMPONENTS/Characters/";
import { RENDER } from "./";

export default function Character(props){

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

	const mask = { clipPath: `url(${maskPath})` }

	const prevCharacter = characters[index-1] || {};
	const nextCharacter = characters[index+1] || {};

	const { name: prevCharName } = prevCharacter;
	const { name: nextCharName } = nextCharacter;

	return (
		<article id={id}>
			<h1>
				{name}
			</h1>
			<h2>
				{nickname}
			</h2>
			<h3>
				{actor}
			</h3>
			<p>
				{body}
			</p>
			<img 
				src={src} 
				alt={description}
				style={mask}
			/>

			{prevCharName && RENDER.button(prevCharName, -1)}
			{nextCharName && RENDER.button(nextCharName, +1)}

		</article>
	);
}//Character