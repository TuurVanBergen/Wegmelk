import React from "react";
import background from "../assets/151134130003_6.jpg";
import overlay from "../assets/Scan.jpeg";

function Home() {
	return (
		<div
			style={{
				position: "relative",
				width: "100vw",
				height: "100vh",
				overflow: "hidden",
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<img
				src={overlay}
				alt="Scan overlay"
				style={{
					position: "absolute",
					top: "5%",
					left: "5%",
					width: "50%",
					height: "auto",
					objectFit: "contain",
					zIndex: 2,
				}}
			/>
		</div>
	);
}

export default Home;
