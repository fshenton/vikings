import React from "react";
import { RENDER, s } from "./";

export default function Socials(){

	const data = [
		{
			label: "Facebook",
			destination: "https://www.facebook.com/"
		}, {
			label: "Twitter",
			destination: "https://www.twitter.com/"
		}, {
			label: "Instagram",
			destination: "https://www.instagram.com/"
		}
	];

	const links = data.map(RENDER.item);

	return (
		<ul className={ s.wrapper }>
			{ links }
		</ul>
	);
} //Socials
