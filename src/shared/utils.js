function convertToSafeString(string, seperator="_"){
	return string.replace(/\W+/g, '') // remove non-alphanumeric
			.replace(/ /g, seperator)      // replace spaces with underscores or provided seperator
			.toLowerCase();
}//convertToSafeString

export default {
	convertToSafeString
};