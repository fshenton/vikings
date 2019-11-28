import React from "react";
import { s } from "./";

function renderImages(data, index) {

	const { name } = data;

	const mask = { 
		"WebkitMaskImage": `url(/assets/2d/landing/${name}-mask.png)`,
		"MozMaskImage": `url(/assets/2d/landing/${name}-mask.png)`,
		"maskImage": `url(/assets/2d/landing/${name}-mask.png}`
	};

	return (
		<img 
			key={ `bone-${index}` }
			className={ `${s.logo} ${s[name]}` }
			src={ `/assets/2d/landing/${name}-large.jpg` }
			alt="A bone making up part of a big V, for Vikings."
			style={ mask }
		/>
	);
}// generateImages

export default {
	images: renderImages
};
