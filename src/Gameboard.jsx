// import "./Gameboard.css";

// function Gameboard() {
//   return (
//     <div className="gameboardGlobal">
//       <Snake />
//     </div>
//   );
// }

// export default Gameboard;

import React, { useRef, useEffect, useState } from "react";
import Snake from "./Snake.jsx";
const CanvasWithCoordinates = ({ gridSizeGlobal }) => {
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
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
      ctx.strokeStyle = "#FF0000"; // Couleur des axes
      ctx.stroke();
    }
    // Dessinez des lignes verticales
    for (let x = gridSize; x < canvasWidth; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvasHeight);
      ctx.strokeStyle = "#FF0000";
      ctx.stroke();
    }
  }, [coordinates, gridSizeGlobal]);
  return (
    <div>
      <p>Survolez le canvas pour afficher les coordonnées des axes X et Y.</p>
      <p>Coordonnées X : {coordinates.x}</p>
      <p>Coordonnées Y : {coordinates.y}</p>
      <div id="gameBoardContainer">
        <canvas
          id="gameBoard"
          ref={canvasRef}
          width={400} // Largeur du canvas
          height={400} // Hauteur du canvas
          onMouseMove={handleMouseMove}
          style={{ border: "2px solid #FF0000" }}
        ></canvas>
        <Snake />
      </div>
    </div>
  );
};
export default CanvasWithCoordinates;
