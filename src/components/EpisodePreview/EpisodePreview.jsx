import React from "react";

export default function EpisodePreview(){

	return (
		<form>
			<button>Close</button>
			<output>
				<img 
					src="path/to/image.jpg" 
					alt="placeholder description" 
				/>
				<video controls src="path/to/video.mp4" />
			</output>
			<h2>Episode X</h2>
			<h1>Name of Episode X</h1>
			<button>Previous</button>
			<button>Next</button>
		</form>
	);
}
