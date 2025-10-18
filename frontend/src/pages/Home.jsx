import React from "react";
import { Helmet } from "react-helmet";
import "../components/style/Header.css";

// Importeer je nieuwe contactregel-afbeeldingen
import contactLine1 from "../assets/Herotextzw.png";

function Home() {
	return (
		<>
			<Helmet>
				<title>Wegmelk - DIY Label & Zine</title>
				<meta
					name="description"
					content="Wegmelk is a label & zine based in Brussels with a focus on unconventional art and music"
				/>
				<meta
					name="keywords"
					content="music, zine, Brussels, live sessions, releases, radio, works"
				/>
			</Helmet>
			<div className="home-container">
				<div className="contact-section">
					<img
						src={contactLine1}
						alt="Contact line 1"
						className="contact-line"
					/>
				</div>
			</div>
		</>
	);
}

export default Home;
