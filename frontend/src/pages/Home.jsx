import React from "react";
import background1 from "../assets/151134130003_6.jpg";
import background from "../assets/Group 2.svg";
import overlay from "../assets/Scan.jpeg";
import "../components/style/Header.css";

function Home() {
	return (
		<div
			style={{
				position: "relative",
				width: "92vw",
				height: "92vh",
				overflow: "hidden",
				textAlign: "center",
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		></div>
	);
}

export default Home;
