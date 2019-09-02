import React from "react";

export default function EpisodePreview(){

	return (
		<article>
			<button>Close</button>
			<img 
				src="path/to/image.jpg" 
				alt="placeholder description" 
			/>
			<video controls src="path/to/video.mp4" />
			<h2>Episode X</h2>
			<h1>Name of Episode X</h1>
			<button>Previous</button>
			<button>Next</button>
		</article>
	);
}
