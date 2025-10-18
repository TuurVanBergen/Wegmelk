// src/components/NewsletterInline.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/style/AlternativeHeader.css";
export default function NewsletterInline() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle"); // idle | loading | ok | error
	const [message, setMessage] = useState("");

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const subscribe = async () => {
		if (!email.trim() || !emailRegex.test(email)) {
			setStatus("error");
			setMessage("Please enter a valid email address.");
			return;
		}

		setStatus("loading");
		setMessage("");

		try {
			const res = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/api/subscribe`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email }),
				}
			);
			const json = await res.json();

			if (res.ok) {
				setStatus("ok");
				setMessage("Thank you for subscribing!");
				setEmail("");
			} else {
				setStatus("error");
				setMessage(json?.message || "Subscription failed. Try again.");
			}
		} catch (err) {
			setStatus("error");
			setMessage("Network error. Try again later.");
		}
	};

	return (
		<div className="newsletter-inline">
			<input
				type="email"
				className="newsletter-input"
				placeholder="Your email..."
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				aria-label="Your email"
				disabled={status === "loading"}
			/>
			<button
				className="newsletter-btn"
				onClick={subscribe}
				disabled={status === "loading"}
			>
				{status === "loading" ? "..." : "Subscribe"}
			</button>
			{status !== "idle" && <div className="subscribe-message">{message}</div>}
			{/* Privacy link */}
			<div className="privacy-link">
				<Link to="/privacy">Privacy Policy</Link>
			</div>
		</div>
	);
}
