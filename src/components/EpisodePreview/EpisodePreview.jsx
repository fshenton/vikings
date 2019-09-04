import React from "react";

export default function EpisodePreview(props){

	const { 
		number,
		title,
		thumbSrc,
		thumbDesc,
		videoSrc
	} = props;

	const previewId = `episode__${number}__preview`;

	console.log(videoSrc);

	return (
		<aside>
			<a
				href={ videoSrc }
				aria-controls={ previewId }
			>
				<img
					src={ thumbSrc }
					alt={ thumbDesc }
				/>
			</a>
			<div
				id={ previewId }
				aria-hidden="true"
			>
				<header>
					<h2>
						{ `Episode ${number}` } 
					</h2>
					<h1>
						{ title }
					</h1>
					<nav>
						<a href="prevepisodeifthereisone" />
						<a href="nextepisodeifthereisone" />
						<a href="hidepreviewandreturntocurrentepisodepage" />
					</nav>
				</header>
				<video>
					{/*only render the video when it's activated*/}
				</video>
			</div>	
		</aside>
	);
}
