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
		body2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vel, dignissimos saepe! Modi hic possimus ut. Earum deleniti, incidunt rerum beatae deserunt, cum vero similique expedita iusto. Totam perspiciatis, pariatur! Velit, unde, natus. Quam, doloribus dicta? Tempore unde vitae omnis facilis assumenda autem provident consectetur nemo explicabo praesentium nesciunt cupiditate nobis repellat officia, illo nulla molestiae accusamus similique fuga quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum est consequuntur magnam! Voluptatum possimus porro natus hic qui labore dolorem, reiciendis veritatis repellendus incidunt expedita officia odit, culpa, nesciunt pariatur.",
		body3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aspernatur aperiam mollitia, quisquam voluptatum adipisci, quas natus distinctio tenetur dicta perspiciatis culpa voluptas beatae id, earum eum perferendis sit accusantium.",
		body4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga exercitationem aut deserunt, temporibus amet vitae voluptatibus doloribus a, labore facere numquam eveniet aliquam, corporis asperiores. Repellat unde ipsa, quod minus."
	};

	const { 
		image, 
		title, 
		subtitle, 
		body1,
		body2,
		body3,
		body4
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
				<div className={ s.bodyContainer }>
					<p>
						{ body1 }
					</p>
					<p>
						{ body2 }
					</p>
					<p>
						{ body3 }
					</p>
					<p>
						{ body4 }
					</p>
				</div>
			</div>	
		</article>
	);
} //About
