import React from "react";

export default function About(){

	const data = {
		image: {
			src: "path/to/whatever.jpg",
			description: "A bunch of vikings screaming up (improve this later)."
		},
		title: "About",
		subtitle: "The world is coming to an end."
		body: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	};

	const { image, title, subtitle, body } = data;
	const { src, description } = image;

	return (
		<main>
			<img src={src} alt={description} />
			<h1>
				{title}
			</h1>
			<h2>
				{subtitle}
			</h2>
			<p>
				{body}
			</p>
		</main>
	);z
}//About