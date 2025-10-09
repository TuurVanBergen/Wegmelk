import React, { useState } from "react";
import "../components/style/Table.css";
import { Link } from "react-router-dom";

// De dataset die informatie bevat over mijn projecten
const initialData = [
	{
		id: 1,
		Artist: "Artist1",
		title: "Titel1",
		type: "CD",
		link: "More info",
	},
	{
		id: 2,
		Artist: "Artist2",
		title: "Titel2",
		type: "Vinyl",
		link: "More info",
	},
	{
		id: 2,
		Artist: "Artist3",
		title: "Titel3",
		type: "CD",
		link: "More info",
	},
	{
		id: 4,
		Artist: "Artist4",
		title: "Titel4",
		type: "Vinyl",
		link: "More info",
	},
	{
		id: 5,
		Artist: "Artist5",
		title: "Titel5",
		type: "Vinyl",
		link: "More info",
	},
	{
		id: 6,
		Artist: "Artist6",
		title: "Titel6",
		type: "CD",
		link: "More info",
	},
];

function DataTable() {
	// State om de gesorteerde data op te slaan
	const [data, setData] = useState(initialData);

	// State om bij te houden op welke key wordt gesorteerd
	const [sortKey, setSortKey] = useState(null);

	// State om de volgorde (oplopend/aflopend) bij te houden
	const [isDescending, setIsDescending] = useState(false);

	// Functie om de data te sorteren op basis van een key
	const handleSort = (key) => {
		const sortedData = [...data].sort((a, b) => {
			if (key === "date") {
				// Logica voor het sorteren van de data
				const dateA = new Date(a.date.split("/").reverse().join("-"));
				const dateB = new Date(b.date.split("/").reverse().join("-"));
				return isDescending ? dateB - dateA : dateA - dateB;
			} else {
				// Alfabetische sortering voor andere kolommen
				return isDescending
					? b[key].localeCompare(a[key])
					: a[key].localeCompare(b[key]);
			}
		});
		// Update de gesorteerde data
		setData(sortedData);
		// Stelt de huidige key in
		setSortKey(key);
		// Wisselt de volgorde
		setIsDescending(!isDescending);
	};
	return (
		<div className="data-table">
			<table>
				{/* Tabelstructuur */}
				<thead>
					<tr>
						{/* Sorteer mogelijkheden, bij een click event wordt de aangekoppelde code uitgevoerd */}
						<td onClick={() => handleSort("date")}>
							Date {sortKey == "date" ? (isDescending ? "↓" : "↑") : ""}
						</td>
						<td onClick={() => handleSort("title")}>
							Title {sortKey == "title" ? (isDescending ? "↓" : "↑") : ""}
						</td>
						<td onClick={() => handleSort("type")}>
							Type {sortKey == "type" ? (isDescending ? "↓" : "↑") : ""}
						</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{/* Dynamisch genereren van de tabel inhoud */}
					{data.map((item, index) => (
						<tr key={index}>
							<td>{item.Artist}</td>
							<td>{item.title}</td>
							<td>{item.type}</td>
							<td>
								{/* Link naar de specifieke work-pagina */}
								<Link to={"/work" + item.id}>{item.link}</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default DataTable;
