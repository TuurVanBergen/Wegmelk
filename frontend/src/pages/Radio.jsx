import React, { useState, useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";

function Radio() {
	const [isOnline, setIsOnline] = useState(true);
	const [loading, setLoading] = useState(true);

	// URL van je livestream (HTTPS)
	const streamUrl = "https://jouwdomein.be/live"; // Pas aan naar jouw setup

	// Check of de stream bereikbaar is
	useEffect(() => {
		const checkStream = async () => {
			try {
				const response = await fetch(streamUrl, { method: "HEAD" });
				if (!response.ok) setIsOnline(false);
			} catch (error) {
				setIsOnline(false);
			} finally {
				setLoading(false);
			}
		};

		checkStream();
	}, []);

	if (loading) {
		return <p>Stream laden…</p>;
	}

	if (!isOnline) {
		return <p>De stream is momenteel offline. Probeer later opnieuw.</p>;
	}

	return (
		<div>
			<h1>Radio</h1>
			<p>Luister hier naar de livestream:</p>
			<AudioPlayer src={streamUrl} />
		</div>
	);
}

export default Radio;
