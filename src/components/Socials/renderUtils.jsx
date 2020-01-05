import React from "react";
import UTILS from "SHARED/utils.js";
import { s } from "./";
import Link from "COMPONENTS/Link/";

function renderItem(data){
	const { 
		label = "",
		destination,
		...remainingProps
	} = data;
	
	const safeLabel = UTILS.convertToSafeString(label);

	return (
		<li 
			className={ s.item }
			key={ `social__${safeLabel}` }
		>
			<Link
				className={ `${s.link} ${s[safeLabel]}` }
				aria-label={ label }
				destination={ destination } 
				{ ...remainingProps }
			>
				<svg 
					className={ s.svg }
					viewBox="0 0 100 100" 
					preserveAspectRatio="xMidYMin"
				>
					<path 
						className={ s.circle } 
						fill="none" 
						filter="url(#powder)"
						stroke="#FFF" 
						strokeWidth="1" 
						d="
					        M 50, 50
					        m 0, -45
					        a 45,45 0 0,1 0,90
					        a -45,-45 0 0,1 0,-90
					    "
				    />
				</svg>
			</Link>
		</li>
	);
}// renderItem

export default {
	item: renderItem
};
