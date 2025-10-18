import React from "react";
import "../components/style/Footer.css";

import archiveIcon from "../assets/Archivezw.png";
import bandcampIcon from "../assets/Bandcampzw.png";
import mailIcon from "../assets/Email.png";
import InstagramIcon from "../assets/Instagramzw.png";
import youtubeIcon from "../assets/youtube.png"; // <— nieuwe YouTube icon toegevoegd

function Footer() {
	return (
		<>
			{/* Footer onderaan met social links */}
			<div className="footer-container">
				<div className="footer-socials">
					<a
						href="https://archive.org/details/@wegmelk/uploads"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={archiveIcon} alt="Archive" className="footer-icon" />
					</a>
					<a
						href="https://bandcamp.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={bandcampIcon} alt="Bandcamp" className="footer-icon1" />
					</a>
					<a
						href="https://www.instagram.com/wegmelk_magazine/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={InstagramIcon} alt="Instagram" className="footer-icon2" />
					</a>
					<a
						href="https://www.youtube.com/@Wegmelk"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={youtubeIcon} alt="YouTube" className="footer-icon4" />
					</a>
					<a href="mailto:wegmelk.records@gmail.com">
						<img src={mailIcon} alt="Mail" className="footer-icon3" />
					</a>
				</div>
			</div>
		</>
	);
}

export default Footer;
