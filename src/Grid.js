import React, { useRef, useEffect } from 'react';
import Block from './Block';

const Grid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Remplir le canvas avec une couleur de fond
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div>
        <Block/>
        <canvas ref={canvasRef} width={400} height={400}></canvas>
    </div>
  );
};

export default Grid;