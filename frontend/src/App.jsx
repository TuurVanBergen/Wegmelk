import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Radio from "./pages/Radio";

import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
	return (
		<div>
			<Header></Header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Radio" element={<Radio />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Privacy" element={<Privacy />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
