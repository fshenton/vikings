import React from "react";

function renderBody(data, options = {}){ 
	const paragraphs = data.split("\n"); // splits the string at every line-break

	return paragraphs.map(
		renderParagraph.bind(this, options)
	);
}// renderBody


function renderParagraph(options, text, index){
	const { scope, className } = options;

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


function findLink(markdown){
	const labelStart = markdown.indexOf("[");

	if(labelStart === -1) return false; //no link found

	const labelEnd     = markdown.indexOf("]", labelStart);
	const text         = markdown.substring(labelStart+1, labelEnd);
	
	const destStart    = labelEnd+2; 
	const destEnd      = markdown.indexOf(")", destStart);
	const destination  = markdown.substring(destStart, destEnd);

	return {
		index: labelStart,
		text,
		destination
	};
}// findLink

export default {
	body: renderBody
}