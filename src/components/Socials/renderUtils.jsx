import React from "react";
import Link from "COMPONENTS/Link/";
import UTILS from "SHARED/utils.js";
import { s } from "./";

function renderItem(data){

	const { 
		label = "",
		destination,
		...remainingProps
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);

	return (
		<li 
			key={ `social__${safeLabel}` }
			className={ s.item }
		>
			<Link
				className={ `${s.link} ${s[safeLabel]}` }
				aria-label={ label }
				destination={ destination } 
				{ ...remainingProps }
			>
				<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMin">
					<path className={ s.circle } fill="none" stroke="#FFF" strokeWidth="2"
					d="
				        M 50, 50
				        m -48, 0
				        a 48,48 0 1,0 96,0
				        a 48,48 0 1,0 -96,0
				    "/>
				</svg>
			</Link>
		</li>
	);
}// renderItem

export default {
	item: renderItem
};
