import React from "react";
import RENDER from "SHARED/renderUtils.jsx";

export default function Socials(){

	const data = [
		{
			label: "facebook",
			destination: "https://www.facebook.com/",
			iconOnly: true
		}, {
			label: "twitter",
			destination: "https://www.twitter.com/",
			iconOnly: true
		}, {
			label: "instagram",
			destination: "https://www.instagram.com/",
			iconOnly: true
		}
	];

	const links = data.map(RENDER.item.bind(true, "socials"));

	return (
		<ul>
			{links}
		</ul>
	);
}//Socials