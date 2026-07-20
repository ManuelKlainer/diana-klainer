import { useState } from 'react';

export function useSwipe({ onSwipedLeft, onSwipedRight }) {
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const minSwipeDistance = 50;
    const onTouchStart = (e) => {
        setTouchEndX(null);
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;

        const distance = touchStartX - touchEndX;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            onSwipedLeft();
        }
        if (isRightSwipe) {
            onSwipedRight();
        }
    };

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    };
}