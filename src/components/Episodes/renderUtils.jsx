import React from "react";

function renderPaginationLink(data){

	const { number } = data;

	return (
		<li key={`episode__pagination__${number}`}>
			<a href={ `#episode-${number}` }>
				{ number }
			</a>
		</li>
	);	
}// renderPaginationLink

function renderEpisode(data){

	const { 
		number,
		title,
		synopsis,
		image: { 
			src: thumbSrc,
			description: thumbDesc
		},
		video: {
			src: videoSrc
		}
	} = data;

	return (
		<li key={ `episode__${number}` }>
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
}// renderEpisode

export default { 
	pagination: renderPaginationLink,
	episode: renderEpisode
};