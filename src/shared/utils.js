function convertToSafeString(string, seperator="_"){

	return string.replace(/\W+/g, seperator) // remove non-alphanumeric & space, inset seperators
			.toLowerCase();
}//convertToSafeString


function getDeviceWidth(){
	const w = Math.max(
		document.documentElement.clientWidth, 
		window.innerWidth 
		|| 0
	);

	return w;
}// getDeviceWidth

function getDeviceHeight(){
	const h = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight
		|| 0
	);

	return h;
}// getDeviceHeight

export default {
	convertToSafeString,
	getDeviceWidth,
	getDeviceHeight
};