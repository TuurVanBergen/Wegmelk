import React from "react";

function AudioPlayer({ src }) {
	return (
		<div>
			<audio controls autoPlay preload="auto" style={{ width: "100%" }}>
				<source src={src} type="audio/mpeg" />
				Sorry, je browser ondersteunt deze audio niet.
			</audio>
		</div>
	);
}

export default AudioPlayer;
