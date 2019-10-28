function convertToSafeString(string, seperator="_"){

	return string.replace(/\W+/g, seperator) // remove non-alphanumeric & space, inset seperators
			.toLowerCase();
}//convertToSafeString


function getDeviceDimensions(){
	const width = Math.max(
		document.documentElement.clientWidth, 
		window.innerWidth 
		|| 0
	);

	const height = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight
		|| 0
	);

	return { width, height} ;
}// getDeviceDimensions


export default {
	convertToSafeString,
	getDeviceDimensions
};