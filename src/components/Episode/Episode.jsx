import React from "react";
import {
	data as episodes
} from "COMPONENTS/Episodes/";

export default function Episode(props){

	const {
		index,
		number,
		title,
		synopsis,
		image = {},
		video = {},
	} = props;

	const {
		thumbSrc,
		thumbDesc
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