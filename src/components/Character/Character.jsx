import React from "react";

export default function Character(props){

	const {
		name,
		nickname,
		actor,
		body,
		image = {}
	} = props;

	const {
		src,
		mask: maskPath,
		description
	} = image;

	const mask = { clipPath: `url(${maskPath})` }

	return (
		<article>
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
		</article>
	);
}//Character