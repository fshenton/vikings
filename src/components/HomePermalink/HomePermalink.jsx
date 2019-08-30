import React from "react";
import Link from "COMPONENTS/Link/";

export default function HomePermalink(){
	return (
		<Link 
			destination="/"
			iconOnly={true}
		>
			Home
		</Link>
	);
}//HomePermalink