import "./style/Footer.css";
function Footer() {
	return (
		// Container voor de footer
		<footer className="footer-comp">
			{/* inline css zodat het zeker rekening houdt met de styling */}
			<p style={{ textAlign: "left", marginBottom: "0" }}>Contact:</p>
			{/* Container voor de links van de footer */}
			<ul class="footer-comp-links">
				<li>
					<a href="https://www.instagram.com/wegmelk_magazine/" target="_blank">
						Instagram,
					</a>
				</li>
				<li>
					<a
						href="https://archive.org/details/@wegmelk/uploads"
						target="_blank"
					>
						Archive,
					</a>
				</li>
				<li>
					<a href="https://bandcamp.com/" target="_blank">
						Bandcamp,
					</a>
				</li>
				<li>
					<a
						href="mailto:wegmelk.records@gmail.com
"
					>
						Email
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
