import React from "react";

export default function Episodes(){

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


	const data = {
		episodes: [
			{
				number: 1,
				image: {
					src: "/assets/images/episode-1.jpg",
					description: "Description of episode 1 thumbnail."
				},
				video: {
					src: "/assets/video/episode-1.mp4"
				},
				title: "The Departed, Part 1",
				synopsis: "Guided by Bishop Heahmund's visions, the Saxons devise a battle plan. Ivar the Boneless strategizes on his own as the Vikings undergo increasing pressure. Bjorn Ironside finds himself in a new territory and must convince the local commander he is a trader and not a raider."
			}, {
				number: 2,
				image: {
					src: "/assets/images/episode-2.jpg",
					description: "Description of episode 2 thumbnail."
				},
				video: {
					src: "/assets/video/episode-2.mp4"
				},
				title: "The Departed, Part 2",
				synopsis: "As the Vikings establish their stronghold in York, Ivar is determined to lead the Great Army. In Kattegat, Lagertha misjudges King Harald and pays a heavy price. Floki arrives at a mysterious land."
			}
		]
	};

	const pagination = data.episodes.map(renderPaginationLink);
	const episodes = data.episodes.map(renderEpisode);

	return (
		<>
			<ol>
				{ episodes }
			</ol>
			<nav>
				<button aria-label="Previous episode." />
				<button aria-label="Next episode." />
				<ol>
					{ pagination }
				</ol>
			</nav>
		</>
	);
}// Episodes
