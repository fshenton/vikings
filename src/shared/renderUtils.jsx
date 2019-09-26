import React from "react";

function renderBody(body, scope = ""){
	const paragraphs = body.split("\n"); // splits the string at every line-break
	
	return paragraphs.map(
		renderParagraph.bind(true, scope)
	);
}// renderBody

function renderParagraph(scope, text, index){
	const key = `${scope}__body__paragraph_${index}`;
	
	return (
		<p key={ key }>
			{ text }
		</p>
	);
}// renderParagraph

export default {
	body: renderBody
}