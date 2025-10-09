import React, { useState, useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";

function Radio() {
	const [isOnline, setIsOnline] = useState(true);
	const [loading, setLoading] = useState(true);
	const [showPrevious, setShowPrevious] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	const streamUrl = "https://icecast.radiofrance.fr/fip-midfi.mp3";

	const slides = [
		"/images/slide1.jpg",
		"/images/slide2.jpg",
		"/images/slide3.jpg",
	];

	// Check livestream
	useEffect(() => {
		const checkStream = async () => {
			try {
				const controller = new AbortController();
				const timeout = setTimeout(() => controller.abort(), 5000); // 5 sec timeout

				const response = await fetch(streamUrl, {
					method: "GET",
					signal: controller.signal,
				});

				if (!response.ok) setIsOnline(false);
				clearTimeout(timeout);
			} catch (error) {
				setIsOnline(false);
			} finally {
				setLoading(false);
			}
		};

		checkStream();
	}, []);

	// Slideshow interval
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000); // 5 seconden per slide
		return () => clearInterval(interval);
	}, [slides.length]);

	if (loading) return <p>Stream laden…</p>;
	if (!isOnline)
		return <p>De stream is momenteel offline. Probeer later opnieuw.</p>;

	return (
		<div className="radio-page">
			<div className="radio-header">
				<h1>Radio Live</h1>
				<p>Nieuwe live elke donderdag om 8u</p>
			</div>

			{/* Slideshow */}
			<div className="radio-slideshow">
				<img src={slides[currentSlide]} alt="Radio session" />
			</div>

			{/* Audio Player */}
			<div className="radio-player">
				<AudioPlayer src={streamUrl} />
			</div>

			{/* Vorige sessies */}
			<div className="previous-sessions">
				<button onClick={() => setShowPrevious(!showPrevious)}>
					{showPrevious ? "Sluit vorige sessies" : "Bekijk vorige sessies"}
				</button>
				{showPrevious && (
					<div className="youtube-embeds">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/VIDEO_ID_1"
							title="Vorige sessie 1"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/VIDEO_ID_2"
							title="Vorige sessie 2"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				)}
			</div>
		</div>
	);
}

export default Radio;
