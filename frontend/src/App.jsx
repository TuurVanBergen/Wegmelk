import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Radio from "./pages/Radio";
import Releases from "./pages/Releases";
import Work from "./pages/Work";

function App() {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/radio" element={<Radio />} />
					<Route path="/releases" element={<Releases />} />
					<Route path="/work" element={<Work />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
