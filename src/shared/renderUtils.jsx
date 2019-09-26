import React from "react";

function renderBody(body, scope = "", className = ""){
	const paragraphs = body.split("\n"); // splits the string at every line-break

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
	const linkLabelStart = text.indexOf("[");

	if(linkLabelStart === -1){
		return false;
	}
	else {
		//pull out the link label, discarding the braces
		const linkLabelEnd = text.indexOf("]");
		const linkText = text.substring(linkLabelStart+1, linkLabelEnd);

		//pull out the link destination, discarding the braces
		const linkDestStart = text.indexOf("(");
		const linkDestEnd = text.indexOf(")");
		const linkDest = text.substring(linkDestStart+1, linkDestEnd);

		return {
			index: linkLabelStart,
			text: linkText,
			destination: linkDest
		};
	}
}// findLink

export default {
	body: renderBody
}