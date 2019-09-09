function convertToSafeString(string){
	return string.replace(/\W/g, '') // remove non-alphanumeric
			.replace(/ /g, "_")      // replace spaces with underscores
			.toLowerCase();
}//convertToSafeString

function convertToHyphenatedString(string){
	return string.replace(/\W+/g, '-') // remove non-alphanumeric & replace with -s
			.toLowerCase()
}//convertToHyphenatedString

export default {
	convertToSafeString,
	convertToHyphenatedString
};