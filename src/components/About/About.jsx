import React from "react";
import { s } from "./";

export default function About(){

	const data = {
		image: {
			src: "path/to/whatever.jpg",
			description: "A bunch of vikings screaming up (improve this later)."
		},
		title: "About",
		subtitle: "The world is coming to an end.",
		body: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	};

	const { 
		image, 
		title, 
		subtitle, 
		body 
	} = data;

	const { 
		src, 
		description 
	} = image;

	return (
		<article>
			<img src={ src } alt={ description } />
			<h1 className={ s.heading }>
				{ title }
			</h1>
			<h2 className={ s.subheading }>
				{ subtitle }
			</h2>
			<p>
				{ body }
			</p>
		</article>
	);
} //About
