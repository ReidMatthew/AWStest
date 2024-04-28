import React, { useState } from 'react';
import Sketch from 'react-p5';
import Interactable from './Gear/Interactable';

const MySketch = () => {
    const [scale, setScale] = useState(1);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [interactables, setInteractables] = useState([])

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        setInteractables([new Interactable({ p5, origin: p5.createVector(100, 100), dim: p5.createVector(10, 10) })]);
    };

    const draw = (p5) => {
        p5.background(220);
        p5.scale(scale);
        p5.translate(offsetX, offsetY);
        interactables[0].render();
        p5.translate(-offsetX, -offsetY);

    };

    const handleZoom = (p5, event) => {
        const delta = event.deltaY * 0.0005;
        const scaleFactor = 1 - delta;
        console.log({ event })
        setScale(scale * scaleFactor);
        // setOffsetX(offsetX - (event.x / scale));
        // setOffsetY(offsetY - (event.y / scale));

        return false;
    };

    const handlePanStart = (p5, event) => {
        setIsDragging(true);
        setStartX(event.clientX);
        setStartY(event.clientY);
    };

    const handlePan = (p5, event) => {
        if (isDragging) {
            const dx = (event.clientX - startX) / scale;
            const dy = (event.clientY - startY) / scale;
            setOffsetX(offsetX + dx);
            setOffsetY(offsetY + dy);
            setStartX(event.clientX);
            setStartY(event.clientY);
        }
    };

    const handlePanEnd = () => {
        setIsDragging(false);
    };

    return (
        <Sketch
            setup={setup}
            draw={draw}
            mouseWheel={handleZoom}
            mousePressed={handlePanStart}
            mouseReleased={handlePanEnd}
            mouseDragged={handlePan}
        />
    );
};

export default MySketch;
