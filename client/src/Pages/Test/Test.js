import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const CircularTextTransition = () => {
    const texts = ["First Text", "Second Text", "Third Text"];
    const [index, setIndex] = useState(0);

    // Transitions for upward motion with X-axis rotation
    const transitions = useTransition(texts[index], {
        from: { opacity: 0, transform: "translateY(50px) rotateX(90deg)" },  // Start below with X-axis rotation
        enter: { opacity: 1, transform: "translateY(0px) rotateX(0deg)" },   // Move to center and face forward
        leave: { opacity: 0, transform: "translateY(-50px) rotateX(-90deg)" }, // Move upwards with reverse X-axis rotation
        config: { tension: 280, friction: 30 },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [texts.length]);

    return (
        <div style={{ position: "relative", height: "100px", overflow: "hidden" }}>
            {transitions((style, item) => (
                <animated.div style={{ ...style, position: "absolute", width: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>{item}</h1>
                </animated.div>
            ))}
        </div>
    );
};

export default CircularTextTransition;
