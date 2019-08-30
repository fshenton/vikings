function convertToSafeString(string){
	return string.replace(/\W/g, '') // remove non-alphanumeric
			.replace(/ /g, "_")      // replace spaces with underscores
			.toLowerCase();
}//convertToSafeString

export default {
	convertToSafeString
};