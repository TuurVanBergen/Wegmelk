require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const morgan = require("morgan");

const app = express();

// --- Security headers ---
app.use(
	helmet({
		contentSecurityPolicy: {
			useDefaults: true,
			directives: {
				"default-src": ["'self'"],
				"script-src": ["'self'"],
				"style-src": ["'self'", "'unsafe-inline'"],
				"img-src": ["'self'", "data:"],
				"connect-src": ["'self'", "https://api.brevo.com"],
			},
		},
	})
);

// --- Request logging ---
if (process.env.NODE_ENV !== "production") {
	app.use(morgan("dev"));
} else {
	app.use(morgan("combined"));
}

// --- Body parser en payload limit ---
app.use(express.json({ limit: "10kb" }));

// --- CORS ---
const allowedOrigins = [process.env.ALLOWED_ORIGIN || "http://localhost:5173"];

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) callback(null, true);
			else callback(new Error("Not allowed by CORS"));
		},
	})
);

// --- Rate limiting (globaal)
const globalLimiter = rateLimit({
	windowMs: 60 * 1000,
	max: 100,
	message: { message: "Too many requests, try again later." },
	standardHeaders: true,
	legacyHeaders: false,
});
app.use(globalLimiter);

// Specifieke limiter voor subscribe endpoint
const subscribeLimiter = rateLimit({
	windowMs: 60 * 1000,
	max: 10,
	message: { message: "Too many subscription attempts, try again later." },
	standardHeaders: true,
	legacyHeaders: false,
});
app.use("/api/subscribe", subscribeLimiter);

// --- Subscribe endpoint ---
app.post(
	"/api/subscribe",
	body("email").isEmail().normalizeEmail(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ message: "Invalid email address." });
		}

		const { email } = req.body;

		try {
			const apiKey = process.env.BREVO_API_KEY;
			if (!apiKey) {
				console.error("No BREVO_API_KEY in env");
				return res.status(500).json({ message: "Server misconfigured." });
			}

			const url = "https://api.brevo.com/v3/contacts";
			const bodyPayload = {
				email,
				listIds: process.env.BREVO_LIST_IDS
					? process.env.BREVO_LIST_IDS.split(",").map((id) => parseInt(id))
					: [],
				updateEnabled: true,
			};

			const r = await axios.post(url, bodyPayload, {
				headers: {
					"api-key": apiKey,
					"Content-Type": "application/json",
				},
				timeout: 7000,
			});

			// Succes of contact bestaat al
			if ([200, 201, 204].includes(r.status)) {
				return res.status(200).json({ message: "Subscribed successfully." });
			}

			// fallback
			return res.status(200).json({ message: "Subscribed successfully." });
		} catch (err) {
			if (err.response) {
				const code = err.response.status;
				if ([400, 409].includes(code)) {
					return res.status(200).json({ message: "Subscribed successfully." });
				}
			}
			console.error("Subscribe failed:", err.message);
			return res
				.status(502)
				.json({ message: "Upstream error. Try again later." });
		}
	}
);

// --- Start server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
