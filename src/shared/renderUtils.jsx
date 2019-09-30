import React from "react";

function renderBody(data, options = {}){ 
	const { scope, className } = options;
	
	const paragraphs = data.split("\n"); // splits the string at every line-break

	return paragraphs.map(
		renderParagraph.bind(this, scope, className)
	);
}// renderBody

function renderParagraph(scope, className, text, index){
	const key = `${scope}__body__paragraph_${index}`;
	
	//if there is a link inside the text, cut it out
	const link = findLink(text) || {};
	if(link) text = text.slice(0, link.index);

	return (
		<p 
			className={ className }
			key={ key }
		>
			{ text }
			
			{ link && (
				<a href={ link.destination } >
					{ link.text }
				</a>
			)}
		</p>
	);
}// renderParagraph

function findLink(text){
	const labelStart = text.indexOf("[");

	if(labelStart === -1){
		return false;
	}
	else {
		//pull out the link label, discarding the braces
		const labelEnd     = text.indexOf("]");
		const labelText    = text.substring(labelStart+1, labelEnd);

		//pull out the link destination without braces
		const destStart    = labelEnd+2; //skip opening brace
		const destEnd      = text.indexOf(")");
		const destination  = text.substring(destStart, destEnd);

		return {
			index: labelStart,
			text: labelText,
			destination: destination
		};
	}
}// findLink

export default {
	body: renderBody
}