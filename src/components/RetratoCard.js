import React, { useState } from 'react';

const RetratoCard = ({ title, technique, dimensions, images, setSelectedImg }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imageList = Array.isArray(images) ? images : [images];
    const hasMultipleImages = imageList.length > 1;

    return (
        <div className="retrato-box">
            <div className={hasMultipleImages ? "retrato-img-section-multiple" : "retrato-img-section"}>
                <div
                    className="retrato-img-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {imageList.map((src, index) => (
                        <div className="retrato-img-wrapper" key={index}>
                            <img
                                src={src}
                                alt={`${title} - Vista ${index + 1}`}
                                className="retrato-img"
                                onClick={() => setSelectedImg(src)}
                            />
                        </div>
                    ))}
                </div>

                {hasMultipleImages && (
                    <div className="buttons">
                        {imageList.map((_, index) => (
                            <div
                                key={index}
                                className={`bubble ${currentIndex === index ? 'selected' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                )}
            </div>
            <div className="retrato-text-section">
                <div className="retrato-row">
                    <div className="retrato-title">{title}</div>
                </div>
                <div className="retrato-row">
                    <div className="retrato-text">{technique}</div>
                </div>
                <div className="retrato-row">
                    <div className="retrato-text">{dimensions}</div>
                </div>
            </div>
        </div>
    );
};

export default RetratoCard;