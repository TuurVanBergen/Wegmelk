import React, { useRef, useState, useEffect } from "react";
import "../components/style/AudioPlayer.css";
import CurrentTrack from "./CurrentTrack";

function AudioPlayer({ src, disabled = false, statusUrl }) {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [muted, setMuted] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const togglePlay = () => {
		if (!audioRef.current || disabled) return;
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			audioRef.current.play();
			setIsPlaying(true);
		}
	};

	const toggleMute = () => {
		if (!audioRef.current || disabled) return;
		audioRef.current.muted = !muted;
		setMuted(!muted);
	};

	const handleVolumeChange = (e) => {
		if (disabled) return;
		const newVolume = parseFloat(e.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
			if (newVolume > 0 && muted) setMuted(false);
		}
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateTime = () => setCurrentTime(audio.currentTime);
		const setAudioDuration = () => setDuration(audio.duration);

		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", setAudioDuration);

		return () => {
			audio.removeEventListener("timeupdate", updateTime);
			audio.removeEventListener("loadedmetadata", setAudioDuration);
		};
	}, []);

	const handleProgressChange = (e) => {
		if (disabled) return;
		const value = parseFloat(e.target.value);
		if (audioRef.current) audioRef.current.currentTime = value;
		setCurrentTime(value);
	};

	const formatTime = (sec) => {
		if (isNaN(sec)) return "0:00";
		const minutes = Math.floor(sec / 60);
		const seconds = Math.floor(sec % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	return (
		<div className="audio-player">
			<audio ref={audioRef} src={src} preload="metadata" />
			<CurrentTrack statusUrl={statusUrl} />

			<div className="controls">
				<button onClick={togglePlay} disabled={disabled}>
					{isPlaying ? "Pause" : "Play"}
				</button>

				<div className="progress-wrapper">
					<span className="time">{formatTime(currentTime)}</span>
					<input
						type="range"
						min={0}
						max={duration || 0}
						step="0.01"
						value={currentTime}
						onChange={handleProgressChange}
						disabled={disabled}
					/>
				</div>

				<button onClick={toggleMute} disabled={disabled}>
					{muted ? "Unmute" : "Mute"}
				</button>
				<input
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={muted ? 0 : volume}
					onChange={handleVolumeChange}
					disabled={disabled}
				/>
			</div>
		</div>
	);
}

export default AudioPlayer;
