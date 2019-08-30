function checkProps(props){

	const { children, destination } = props;

	//check for missing props
	if(!children) console.warn("There's no label in here, so the link is invisible!");
	if(!destination) console.warn("The fuck? A link without a destination? Sort it out.");
	
}//checkProps

export default {
	checkProps
};