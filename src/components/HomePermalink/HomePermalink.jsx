import React, { useContext } from "react";
import Link from "COMPONENTS/Link/";
import { s } from "./";

export default function HomePermalink(){

	return (
			<Link
				className={ s.home } 
				destination="/"
				aria-label="Home."
			/>
	);
}// HomePermalink
