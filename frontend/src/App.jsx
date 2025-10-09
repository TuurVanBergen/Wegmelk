import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Radio from "./pages/Radio";
import Releases from "./pages/ReleasesWork";

function App() {
	return (
		<div>
			<Header></Header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Radio" element={<Radio />} />
					<Route path="/Releases-Work" element={<Releases />} />
				</Routes>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
