import "./style/Header.css";
import { Link } from "react-router-dom";

import navHome from "../assets/Homezw.png";
import navContact from "../assets/Contactzw.png";
import navRadio from "../assets/Radiozw.png";
import React from "react";

function Header() {
	return (
		<div className="Header">
			<nav>
				<ul className="nav-list">
					<li>
						<Link to="/">
							<img src={navHome} alt="Home" className="nav-image" />
						</Link>
					</li>

					<li>
						<Link to="/Radio">
							<img src={navRadio} alt="Radio" className="nav-image3" />
						</Link>
					</li>
					<li>
						<Link to="/Contact">
							<img src={navContact} alt="Contact" className="nav-image2" />
						</Link>
					</li>
					<br />
				</ul>
			</nav>
		</div>
	);
}

export default Header;
