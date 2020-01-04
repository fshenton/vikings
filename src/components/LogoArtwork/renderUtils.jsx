import React from "react";
import { s } from "./";

function renderImages(data, index) {
	const { name } = data;

	const mask = { 
		"WebkitMaskImage": `url(/assets/2d/landing/${name}-mask.png)`,
		"MozMaskImage": `url(/assets/2d/landing/${name}-mask.png)`,
		"maskImage": `url(/assets/2d/landing/${name}-mask.png)`
	};

	return (
		<img 
			className={ `${s.logo} ${s[name]}` }
			alt="A bone making up part of a big V, for Vikings."
			key={ `bone-${index}` }
			src={ `/assets/2d/landing/${name}-large.jpg` }
			style={ mask }
		/>
	);
}// generateImages

export default {
	images: renderImages
};
