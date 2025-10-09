import React, { useRef, useState } from "react";

function AudioPlayer({ src }) {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [muted, setMuted] = useState(false);

	const togglePlay = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			audioRef.current.play();
			setIsPlaying(true);
		}
	};

	const toggleMute = () => {
		if (!audioRef.current) return;
		audioRef.current.muted = !muted;
		setMuted(!muted);
	};

	const handleVolumeChange = (e) => {
		const newVolume = parseFloat(e.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
			if (newVolume > 0 && muted) setMuted(false);
		}
	};

	return (
		<div className="audio-player">
			<audio ref={audioRef} src={src} preload="none" />
			<div className="controls">
				<button onClick={togglePlay}>{isPlaying ? "⏸️" : "▶️"}</button>
				<button onClick={toggleMute}>{muted ? "🔇" : "🔊"}</button>

				<input
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={muted ? 0 : volume}
					onChange={handleVolumeChange}
				/>
			</div>
		</div>
	);
}

export default AudioPlayer;
