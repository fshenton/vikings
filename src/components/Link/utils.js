function checkProps(props){
	const { 
		"aria-label": label, // (string) accessible label for the link 
		destination,         // (string) path to destination to use for href
		children,            // (array || function) any elements to render inside the link
	} = props;

	//check for missing props
	if(!children && !label){
		console.error(`There's no label for the link to ${destination}, so the link is invisible!`);
	}
	if(!destination) {
		console.error(`The fuck? The link to ${label || children} doesn't have a destination! Sort it out!`);
	}
	
}// checkProps

export default {
	checkProps
};
