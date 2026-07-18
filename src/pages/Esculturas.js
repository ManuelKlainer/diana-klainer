import React, { useState } from "react";
import "../styles/Esculturas.css";
import EsculturaCard from "../components/EsculturaCard";
import { obras } from '../data/EsculturasData'
function Esculturas() {
	const [selectedImg, setSelectedImg] = useState(null);

	return (
		<main className="esculturas-main">
			<div className="esculturas-container">
				<h1 className="esculturas-title">Esculturas</h1>

				<div className="esculturas-column">
					{obras.map((obra) => (
						<EsculturaCard
							key={obra.id}
							title={obra.title}
							technique={obra.technique}
							dimensions={obra.dimensions}
							images={obra.images}
							setSelectedImg={setSelectedImg}
						/>
					))}
					
				</div>
			</div>
			<div
				className="big-img"
				style={{ display: selectedImg ? "flex" : "none" }}
				onClick={() => setSelectedImg(null)}
			>
				<img
					src={selectedImg}
					alt="Selected Escultura"
					className="big-img-content"
					onClick={(e) => e.stopPropagation()}
				/>
			</div>
		</main>
	);
}

export default Esculturas;
