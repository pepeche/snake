import React, { useRef, useEffect, useState } from "react";
import Snake from "./Snake.jsx";
import "./Gameboard.css"

function CanvasWithCoordinates({ gridSizeGlobal }) {

  
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  
  
  function handleKeyPress(e) {
    console.log("coucou")
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoordinates({ x, y });
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Effacez le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dessinez les axes X et Y
    ctx.beginPath();
    // Axe X (horizontal)
    ctx.moveTo(0, coordinates.y);
    ctx.lineTo(canvas.width, coordinates.y);
    // Axe Y (vertical)
    ctx.moveTo(coordinates.x, 0);
    ctx.lineTo(coordinates.x, canvas.height);

    const gridSize = gridSizeGlobal;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    for (let y = gridSize; y < canvasHeight; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvasWidth, y);
      // ctx.strokeStyle = "black"; // Couleur des axes
      // ctx.stroke();
    }
    // Dessinez des lignes verticales
    for (let x = gridSize; x < canvasWidth; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvasHeight);
      // ctx.strokeStyle = "black";
      // ctx.stroke();
    }
  }, [coordinates, gridSizeGlobal]);

  let width = 400;
  let height = 400;

  

  return (
    <div className="container">
      <div id="gameBoardContainer">
        <canvas
          id="gameBoard"
          ref={canvasRef}
          width={width}
          height={height}
          style={{
            outline : "5px solid black"
          }}
        ></canvas>
        <Snake width={width} height={height}/>
      </div>
      
    </div>
  );
};
export default CanvasWithCoordinates;
