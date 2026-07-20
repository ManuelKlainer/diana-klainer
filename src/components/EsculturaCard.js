import React, { useRef, useState } from 'react';
import { useSwipe } from '../hooks/useSwipe'

const EsculturaCard = ({ title, technique, dimensions, images, setSelectedImg }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imageList = Array.isArray(images) ? images : [images];
    const hasMultipleImages = imageList.length > 1;

    const buttonsRefs = useRef([]);

    const swipeHandlers = useSwipe({
        onSwipedLeft: (element) => {
            setCurrentIndex(prevIndex => 
                prevIndex < imageList.length - 1 ? prevIndex + 1 : prevIndex
            );
        },
        onSwipedRight: (element) => {
            setCurrentIndex(prevIndex => 
                prevIndex > 0 ? prevIndex - 1 : prevIndex
            );
        }
    })


    return (
        <div className="escultura-box">
            <div className={hasMultipleImages ? "escultura-img-section-multiple" : "escultura-img-section"}>
                <div
                    className="escultura-img-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {imageList.map((src, index) => (
                        <div className="escultura-img-wrapper" key={index}>
                            <img
                                src={src}
                                alt={`${title} - Vista ${index + 1}`}
                                className="escultura-img"
                                onClick={() => setSelectedImg(src)}
                                {...swipeHandlers}
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
                                ref={(el) => {
                                    buttonsRefs.current[index] = el;
                                }}
                            ></div>
                        ))}
                    </div>
                )}
            </div>
            <div className="escultura-text-section">
                <div className="escultura-row">
                    <div className="escultura-title">{title}</div>
                </div>
                <div className="escultura-row">
                    <div className="escultura-text">{technique}</div>
                </div>
                <div className="escultura-row">
                    <div className="escultura-text">{dimensions}</div>
                </div>
            </div>
        </div>
    );
};

export default EsculturaCard;