import React, { useState, useEffect } from "react";

function MuestraCard({ title, images }) {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isFading, setIsFading] = useState(false);
        const [disableTransition, setDisableTransition] = useState(false);
        useEffect(() => {
            if (images.length > 1) {
                if (!images || images.length === 0) return;

                let timeout;
                const interval = setInterval(() => {
                    setIsFading(true);

                    timeout = setTimeout(() => {
                        setDisableTransition(true);
                        
                        setCurrentIndex((prev) => (prev + 1) % images.length);
                        
                        setIsFading(false);
                        
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                setDisableTransition(false);
                            });
                        });
                    }, 3000);

                }, 6000);
                
                return () => {
                    clearInterval(interval);
                    clearTimeout(timeout);
                };
            } else {
                return () => {};
            }
        }, [images]); 
    if (images.length > 1) {

        const nextIndex = (currentIndex + 1) % images.length;

        return (
            <div className="muestra-container">
                <div className="muestra">
                    <div className="muestra-title">{title}</div>
                    <div className="carrete">
                        <img 
                            src={images[nextIndex]} 
                            alt="Próxima muestra" 
                            className="next" 
                        />
                        
                        <img 
                            src={images[currentIndex]} 
                            alt={`Muestra actual ${title}`} 
                            className={`current ${isFading ? 'fade-out' : ''} ${disableTransition ? 'no-transition' : ''}`}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div className="muestra-container">
                <div className="muestra">
                    <div className="muestra-title">{title}</div>
                    <div className="carrete">
                        <img 
                            src={images[0]}
                            alt="Muestra"
                        />
                    </div>
                </div>
            </div>
        );
    }


    
}

export default MuestraCard;