import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

function Random() {
    const [color, setColor] = useState([69, 311, 420]);

    useEffect(() => {
        applyColor();
    });

    const handleClick = () => {
        setColor(chooseColor);
    };

    const formatColor = (ary) => {
        return 'rgb(' + ary.join(', ') + ')';
    };

    const applyColor = () => {
        const newColor = formatColor(color);
        document.body.style.background = newColor;
    };

    const chooseColor = () => {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random() * 256));
        }
        return random;
    };

    return (
        <div>
            <h1 className={color.reduce((a, b) => a + b) < 127 * 3 ? 'white' : 'black'}>Your color is {formatColor(color)}.</h1>
            <Button light={color.reduce((a, b) => a + b) < 127 * 3} onClick={handleClick} />
        </div>
    );
}

export default Random;