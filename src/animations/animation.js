// src/animations/animations.js
export const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 }
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
};

export const fadeInDelay = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay: 0.5 }
};

export const buttonHover = {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 }
};
