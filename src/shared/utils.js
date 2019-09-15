function convertToSafeString(string, seperator="_"){

	return string.replace(/\W+/g, seperator) // remove non-alphanumeric & space, inset seperators
			.toLowerCase();
}//convertToSafeString

export default {
	convertToSafeString
};