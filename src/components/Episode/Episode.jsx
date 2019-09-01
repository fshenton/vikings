import React, { useContext } from "react";
import { Episodes } from "COMPONENTS/Episodes/";

export default function Episode(props){

	//CONTEXT
	//---------------------------
	const { activeIndex } = useContext(Episodes);


	//RENDER
	//---------------------------
	const {
		index,
		number,
		title,
		synopsis,
		image = {},
		video = {},
	} = props;

	const {
		src: thumbSrc,
		description: thumbDesc
	} = image;

	const { videoSrc } = video;

	return (
		<li>
			<article>
				<h2>
					Episode { number }
				</h2>
				<h1>
					{ title }
				</h1>
				<p>
					{ synopsis }
				</p>
				<a 
					href={ videoSrc } 
					rel="noopener" 
					target="_blank"
				>
					<img 
						src={ thumbSrc } 
						alt={ thumbDesc } 
					/>
				</a>
			</article>
		</li>
	);
}