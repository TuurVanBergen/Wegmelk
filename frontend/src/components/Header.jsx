import "./style/Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Header({ toggleListView }) {
	// Haalt informatie op over de huidige (URL)
	const location = useLocation(); // haalt de huidige url op
	const navigate = useNavigate(); // navigeert naar een andere url

	// Controleer of je op een specifieke /work pagina zit
	const isWorkPage = location.pathname.startsWith("/work");

	// Beheert de status van het sidemenu (mobile)
	const [sidenavOpen, setSidenavOpen] = useState(false);

	//openen van het sidemenu (mobile)
	const openNav = () => {
		setSidenavOpen(true);
	};

	//sluiten van het sidemenu
	const closeNav = () => {
		setSidenavOpen(false);
	};
	return (
		// Container van de Header
		<div className="Header">
			<nav>
				<ul>
					<li>
						{/* Link naar de homepagina */}
						<Link to="/">Home,</Link>
					</li>
					<li>
						{/* Link naar de about pagina */}
						<Link to="/Releases-Work">Releases/Work</Link>
					</li>
					<li>
						{/* Link naar de about pagina */}
						<Link to="/Radio">Radio</Link>
					</li>
					<br />
					{/* Wordt alleen weergeven als de gebruiker op de Work-pagina zit */}
					{location.pathname == "/Releases-Work" && (
						<>
							<li>
								<a onClick={() => toggleListView(false)}>Releases,</a>
							</li>
							<li>
								<a onClick={() => toggleListView(true)}>Works</a>
							</li>
						</>
					)}
					{/* Toont de "previous page"-link als je op een /work pagina zit */}
					{isWorkPage && (
						<li>
							<a onClick={() => navigate(-1)}>previous page</a>
						</li>
					)}
				</ul>
			</nav>
			{/* Hamburger menu gebaseerd op een voorbeeld van W3schools*/}
			<span
				className="hamburger"
				onClick={openNav}
				style={{ fontSize: "30px", cursor: "pointer" }}
			>
				&#9776;
			</span>

			{/* Code voor de SideMenu */}
			<div className={`sidenav ${sidenavOpen ? "open" : ""}`}>
				<span className="closebtn" onClick={closeNav}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="black"
						width="36px"
						height="36px"
					>
						<path d="M19.707 4.293a1 1 0 00-1.414 0L12 10.586 5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 101.414 1.414L12 13.414l6.293 6.293a1 1 0 101.414-1.414L13.414 12l6.293-6.293a1 1 0 000-1.414z" />
					</svg>
				</span>
				{/* Links in het sidemenu, zowel naar de homepagina als naar de about pagina */}
				<Link to="/" onClick={closeNav}>
					Work
				</Link>
				<Link to="/About" onClick={closeNav}>
					About
				</Link>
				{/* Footer informatie in het sidemenu */}
				<div className="footer-menu">
					<p>Contact:</p>
					<ul className="footer-links">
						<li>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram,
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn,
							</a>
						</li>
						<li>
							<a href="mailto:example@example.com">Email</a>
						</li>
					</ul>
				</div>
				{isWorkPage && (
					<a
						onClick={() => {
							navigate(-1); // Navigeer naar de vorige pagina
							closeNav(); // Sluit het SideMenu
						}}
					>
						Previous Page
					</a>
				)}
			</div>
		</div>
	);
}

export default Header;
