// src/pages/Privacy.jsx
import React from "react";
import Footer from "../components/Footer.jsx";
import "../components/style/AlternativeHeader.css";

function Privacy() {
	return (
		<div className="privacy-page">
			<div className="privacy-container">
				<h1>Privacy & Newsletter</h1>
				<p>
					Wegmelk is a label / zine. When you subscribe to our newsletter, we
					only ask for your email address. We use it solely to send updates
					about Wegmelk: new releases, live streams, and other projects from us.
				</p>
				<p>
					Your data is securely processed via{" "}
					<a
						href="https://www.brevo.com/legal/privacypolicy/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Brevo (Sendinblue)
					</a>{" "}
					and will not be shared with third parties.
				</p>
				<p>
					We do{" "}
					<strong>
						not use your email for advertisements or commercial purposes
					</strong>
					. You can unsubscribe at any time via the link in our emails or by
					contacting us at{" "}
					<a href="mailto:wegmelk.records@gmail.com">
						wegmelk.records@gmail.com
					</a>
					.
				</p>
				<p>
					<strong>Responsible party:</strong>
					<br />
					Wegmelk / label / zine, Brussels
					<br />
					<a href="mailto:wegmelk.records@gmail.com">
						wegmelk.records@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
}

export default Privacy;
