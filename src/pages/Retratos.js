import React, { useState } from 'react';
import '../styles/Retratos.css';
import RetratoCard from '../components/RetratoCard';
import { obras } from '../data/RetratosData'

function Retratos() {

    const [selectedImg, setSelectedImg] = useState(null);

    

    return (
        <main className="retratos-main">
            <div className="retratos-container">
                <h1 className="retratos-title">Retratos</h1>

                <div className="retratos-column">
                    {obras.map((obra) => (
						<RetratoCard
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
                style={{ display: selectedImg ? 'flex' : 'none' }}
                onClick={() => setSelectedImg(null)}>
                <img
                    src={selectedImg}
                    alt="Selected Retrato"
                    className="big-img-content"
                    onClick={(e) => e.stopPropagation()}
                    />
            </div>
        </main>
        
    );
}

export default Retratos;