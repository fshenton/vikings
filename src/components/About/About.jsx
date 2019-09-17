import React from "react";
import { renderBody as render } from "SHARED/renderUtils.jsx";
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

	const bodyContent = render(body); // create spacing at line-breaks

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
					{ bodyContent }
				</div>
			</div>	
		</article>
	);
} //About
