import React, { useState } from 'react';
import '../styles/Relieves.css';
import RelieveCard from '../components/RelieveCard';
import { obras } from '../data/RelievesData'

function Relieves() {
    console.log(RelieveCard);
    const [selectedImg, setSelectedImg] = useState(null);
    


    return (
        <main className="relieves-main">
            <div className="relieves-container">
                <h1 className="relieves-title">Relieves</h1>

                <div className="relieves-column">
                    {obras.map((obra) => (
                        <RelieveCard
                            key={obra.id}
                            title={obra.title}
                            technique={obra.technique}
                            dimensions={obra.dimensions}
                            image={obra.image}
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
                    alt="Selected Relieve"
                    className="big-img-content"
                    onClick={(e) => e.stopPropagation()}
                    />
            </div>
        </main>
        
    );
}

export default Relieves;