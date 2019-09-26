import React from "react";

function renderBody(body, scope = "", className = ""){
	const paragraphs = body.split("\n"); // splits the string at every line-break
	
	return paragraphs.map(
		renderParagraph.bind(true, scope, className)
	);
}// renderBody

function renderParagraph(scope, className, text, index){
	const key = `${scope}__body__paragraph_${index}`;
	
	return (
		<p 
			className={ className }
			key={ key }
		>
			{ text }
		</p>
	);
}// renderParagraph

export default {
	body: renderBody
}