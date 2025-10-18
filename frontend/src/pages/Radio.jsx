import React, { useState, useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";
import "../components/style/Radio.css";
import infoImg from "../assets/Live.png";
import listenImg from "../assets/Listen.png"; // <— nieuwe afbeelding toegevoegd
import { Helmet } from "react-helmet";

function Radio() {
	const [isOnline, setIsOnline] = useState(false);
	const [loading, setLoading] = useState(true);

	const streamUrl = import.meta.env.VITE_STREAM_URL;
	const statusUrl = import.meta.env.VITE_STATUS_URL;

	// Check livestream status
	useEffect(() => {
		const checkStream = async () => {
			try {
				const controller = new AbortController();
				const timeout = setTimeout(() => controller.abort(), 5000);
				const res = await fetch(statusUrl, { signal: controller.signal });
				const data = await res.json();

				const source = data.icestats.source;
				setIsOnline(!!source);
				clearTimeout(timeout);
			} catch {
				setIsOnline(false);
			} finally {
				setLoading(false);
			}
		};

		checkStream();
		const interval = setInterval(checkStream, 5000); // update elke 5 sec
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="radio-page">
			<Helmet>
				<title>Wegmelk Radio</title>
				<meta
					name="description"
					content="Listen to Wegmelk live radio streaming."
				/>
				<meta name="robots" content="index, follow" />
				<meta property="og:title" content="Wegmelk Radio - Live Stream" />
				<meta
					property="og:description"
					content="Listen to Wegmelk live radio streaming."
				/>
				<meta property="og:type" content="website" />
			</Helmet>

			<img src={infoImg} alt="Radio info" className="radio-text-top-left" />
			<a href="https://www.youtube.com/@Wegmelk">
				{" "}
				<img
					src={listenImg}
					alt="Listen text"
					className="radio-listen-heading"
				/>
			</a>
			{/* nieuwe sectie met Listen.png boven de speler */}
			<div className="radio-content">
				<div className="radio-center-box">
					<AudioPlayer
						src={streamUrl}
						disabled={!isOnline}
						statusUrl={statusUrl}
					/>
					{!isOnline && !loading && (
						<p
							style={{
								color: "#000",
								marginTop: "10px",
								fontFamily: "Helvetica",
							}}
						>
							The stream is currently offline.
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Radio;
