import React from "react";
import { data } from "./";
import { s } from "./";

export default function About(){

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
		<article className={ s.wrapper }>
			<img 
				className={ s.image }
				src={ src } 
				alt={ description } 
			/>
			<div className={ s.textContainer }>	
				<h1 className={ s.heading }>
					{ title }
				</h1>
				<h2 className={ s.subheading }>
					{ subtitle }
				</h2>
				<div className={ s.body }>
					<p>
						{ body }
					</p>
				</div>
			</div>	
		</article>
	);
} //About
