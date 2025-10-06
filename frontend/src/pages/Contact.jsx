import React, { useState } from "react";

function Contact() {
	const [email, setEmail] = useState("");
	const [consent, setConsent] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!consent) {
			alert("Je moet toestemming geven om je in te schrijven.");
			return;
		}

		try {
			const response = await fetch("https://api.brevo.com/v3/contacts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"api-key": "YOUR_BREVO_API_KEY", // Zet hier je Brevo API key
				},
				body: JSON.stringify({
					email: email,
					listIds: [YOUR_LIST_ID], // ID van je nieuwsbrieflijst
					updateEnabled: true, // update als het e-mailadres al bestaat
				}),
			});

			if (response.ok) {
				setSubmitted(true);
				setEmail("");
				setConsent(false);
				setError("");
			} else {
				const data = await response.json();
				setError(data.message || "Er is iets misgegaan.");
			}
		} catch (err) {
			console.error(err);
			setError("Er is een netwerkfout opgetreden.");
		}
	};

	if (submitted) {
		return (
			<p>
				Bedankt voor je inschrijving! Controleer je e-mail voor bevestiging.
			</p>
		);
	}

	return (
		<div>
			<h1>Contact / Nieuwsbrief</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Jouw e-mailadres"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<div>
					<input
						type="checkbox"
						checked={consent}
						onChange={(e) => setConsent(e.target.checked)}
						id="gdpr-consent"
						required
					/>
					<label htmlFor="gdpr-consent">
						Ik geef toestemming om mijn e-mailadres te gebruiken voor de
						nieuwsbrief (GDPR-compliant)
					</label>
				</div>
				<button type="submit">Inschrijven</button>
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</div>
	);
}

export default Contact;
