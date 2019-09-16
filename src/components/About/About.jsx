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
		body1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, accusantium, iste! Quaerat est voluptate vel nulla sed, eveniet tempore ipsam iure. Modi doloribus repellendus voluptates. Doloremque deleniti non, nobis adipisci!",
		body2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vel, dignissimos saepe! Modi hic possimus ut. Earum deleniti, incidunt rerum beatae deserunt, cum vero similique expedita iusto. Totam perspiciatis, pariatur! Velit, unde, natus. Quam, doloribus dicta? Tempore unde vitae omnis facilis assumenda autem provident consectetur nemo explicabo praesentium nesciunt cupiditate nobis repellat officia, illo nulla molestiae accusamus similique fuga quisquam!"
	};

	const { 
		image, 
		title, 
		subtitle, 
		body1,
		body2 
	} = data;

	const { 
		src, 
		description 
	} = image;

	return (
		<article className={ s.wrapper }>
			<img src={ src } alt={ description } />
			<div className={ s.textContent }>	
				<h1 className={ s.heading }>
					{ title }
				</h1>
				<h2 className={ s.subheading }>
					{ subtitle }
				</h2>
				<div className={ s.bodyContent }>
					<p>
						{ body1 }
					</p>
					<p>
						{ body2 }
					</p>
				</div>
			</div>	
		</article>
	);
} //About
