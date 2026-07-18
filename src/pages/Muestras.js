import React from "react";
import "../styles/Muestras.css";
import MuestraCard from "../components/MuestraCard";
import { muestras } from '../data/MuestasData'


function Muestras() {
    

    return (
        <main className="muestras-main">
            <div className="muestras-container">
                <div className="muestras-header">Muestras</div>
                <div className="muestras-display">
                    <div className="muestras">
                        {muestras.map(({title,images},idx) => (
                            <MuestraCard key={idx} title={title} images={images} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Muestras;