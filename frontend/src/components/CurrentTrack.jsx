import React, { useState, useEffect } from "react";

export default function CurrentTrack({ statusUrl }) {
	const [track, setTrack] = useState("Loading...");

	useEffect(() => {
		const fetchTrack = async () => {
			try {
				const res = await fetch(statusUrl);
				const data = await res.json();
				const title = data.icestats.source?.title;
				setTrack(title);
			} catch {
				setTrack("Stream offline");
			}
		};

		fetchTrack();
		const interval = setInterval(fetchTrack, 5000); // update elke 5 sec
		return () => clearInterval(interval);
	}, [statusUrl]);

	return <div className="current-track">{track}</div>;
}
