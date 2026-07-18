import React, { useState } from 'react';

const RelieveCard = ({ title, technique, dimensions, image, setSelectedImg }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relieve-box">
            <div className="relieve-img-section">
                <img src={image} alt={`Relieve ${title}`} className="relieve-img" onClick={(e) => setSelectedImg(image)} />
            </div>
            <div className="relieve-text-section">
                <div className="relieve-row">
                    
                    <div className="relieve-title">{title}</div>
                </div>
                <div className="relieve-row">
                    
                    <div className="relieve-text">{technique}</div>
                </div>
                <div className="relieve-row">
                    
                    <div className="relieve-text">{dimensions}</div>
                </div>
            </div>
        </div>
    );
};

export default RelieveCard;