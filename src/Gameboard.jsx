import React, { useRef, useEffect, useState } from "react";
import Gameover from "./Gameover.jsx";
import Snake from "./Snake.jsx";
import Pomme from "./Pomme.jsx";
import "./Gameboard.css";

function CanvasWithCoordinates({ gridSizeGlobal, score }) {
  
  let width = 400;
  let height = 400;

  const canvasRef = useRef(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const gridSize = gridSizeGlobal;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    for (let y = gridSize; y < canvasHeight; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvasWidth, y);
    }
    for (let x = gridSize; x < canvasWidth; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvasHeight);
    }
  }, [gridSizeGlobal]);

  return (
    <div>
      <div className="container">
        <div id="gameBoardContainer">
          <canvas
            id="gameBoard"
            ref={canvasRef}
            width={width} // Largeur du canvas
            height={height} // Hauteur du canvas
            style={{
              outline: "5px solid black",
            }}
          ></canvas>
          <Snake
            width={width}
            height={height}
            setIsGameOver={setIsGameOver}
            isGameOver={isGameOver}
          />
          <Pomme
            width={width}
            height={height}
            grid={gridSizeGlobal}
          />
        </div>
      </div>
      {isGameOver && (
        <div className="gameOverModal">
          <div className="gameOverContent">
            <Gameover setIsGameOver={setIsGameOver} score={score} />
          </div>
        </div>
      )}
  </div>
  );
}
export default CanvasWithCoordinates;
