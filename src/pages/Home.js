import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';

function Home() {

    /** @type {React.MutableRefObject<HTMLImageElement | null} */
    const animElementRef = useRef(null);

    useEffect(() => {
        const targetElement = animElementRef.current;
        if (!targetElement) return;

        let animationFrameId;

        let previousColor = window.getComputedStyle(targetElement).backgroundColor;

        const monitorLoop = () => {
            

            const currentColor = window.getComputedStyle(targetElement).backgroundColor;

            if (currentColor !== previousColor) {
                
                    const timePassed = performance.now();
                    console.log(`[CSS Debug] Color a ${currentColor} | Tiempo: ${(timePassed / 1000).toFixed(3)}s`);
                    previousColor = currentColor;
            }   

            animationFrameId = requestAnimationFrame(monitorLoop);
        };

        animationFrameId = requestAnimationFrame(monitorLoop);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

  return (
    <main className="home-main">
      <div className="scrollable-content">
        <div className="slideshow-container" ref={animElementRef}>
          <img src="/img/home/home01.jpg" alt="Obra de inicio 1" className="background-image" />
          <img src="/img/home/home02.jpg" alt="Obra de inicio 2" className="background-image" />
          <img src="/img/home/home03.jpg" alt="Obra de inicio 3" className="background-image" />
        </div>
      </div>
    </main>
  );
}

export default Home;