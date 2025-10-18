import React from "react";
import Footer from "../components/Footer.jsx";
import NewsletterInline from "../components/NewsletterInline";
import { Helmet } from "react-helmet";
import "../components/style/AlternativeHeader.css";
import newsletterImg from "../assets/Newsletter.png"; // <— toegevoegd

function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact - Wegmelk Label & Zine</title>
				<meta
					name="description"
					content="Contact Wegmelk, the label & zine based in Brussels, for collaborations, inquiries, or newsletter signup."
				/>
				<meta
					name="keywords"
					content="Wegmelk, DIY, contact, zine, Brussels, music"
				/>
				<meta property="og:title" content="Contact - Wegmelk Label & Zine" />
				<meta
					property="og:description"
					content="Contact Wegmelk, label & zine based in Brussels, for collaborations, inquiries, or newsletter signup."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.wegmelk.be/contact" />
			</Helmet>

			<div className="contact-page">
				<div className="newsletter-wrapper">
					<div className="newsletter-content">
						<img
							src={newsletterImg}
							alt="Newsletter heading"
							className="newsletter-heading"
						/>
						<NewsletterInline />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Contact;
