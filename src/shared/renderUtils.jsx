import React from "react";

function renderBody(body){
	const paragraphs = body.split("\n"); // splits the string at every line-break
	return paragraphs.map(renderParagraph);
}// renderBody

function renderParagraph(text, index){
	const key = `about__body__paragraph_${index}`;
	return (
		<p key={ key }>
			{ text }
		</p>
	);
}// renderParagraph

export default {
	body: renderBody
}