import React from "react";
import RENDER from "SHARED/renderUtils.jsx";
import { data } from "./";
import { s } from "./";

export default function About(){

	const { 
		image: heroImg, 
		title, 
		subtitle, 
		body: bodyData
	} = data;

	const { 
		src, 
		description 
	} = heroImg;

	const body = RENDER.body(bodyData); // create spacing at line-breaks

	return (
		<article className={ s.wrapper }>
			<img 
				className={ s.hero }
				src={ src } 
				alt={ description } 
			/>
			<div className={ s.textContainer }>	
				<h1 className={ s.heading }>
					{ title }
				</h1>
				<h2 className={ s.subheading }>
					<q>
						{ subtitle }
					</q>
				</h2>
				<div className={ s.body }>
					{ body }
				</div>
			</div>	
		</article>
	);
} //About
