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
import "./Gameboard.css"

function CanvasWithCoordinates({ gridSizeGlobal }) {
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



  let [left, setLeft] = useState(0);
  let [top, setTop] = useState(0);
  let [right, setRight] = useState(0);
  let [bottom, setBottom] = useState(0);

  // useEffect(() => {
  //   if (event.key === 'ArrowLeft') {
  //     setLeft = left+20;
  //     console.log('Touche "Left" pressée');
  //     // Ajoutez ici le code que vous souhaitez exécuter pour la touche "Left"
  // }}, [left]);

  function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
      setLeft((prevLeft) => prevLeft + 20)
      console.log('Touche "Left" pressée');
      // Ajoutez ici le code que vous souhaitez exécuter pour la touche "Left"
    } else if (event.key === 'ArrowRight') {
      // La touche "Right" a été pressée
      console.log('Touche "Right" pressée');
      // Ajoutez ici le code que vous souhaitez exécuter pour la touche "Right"
    }
  }
  
  useEffect(() => {
    // Ajoutez le gestionnaire d'événements à la fenêtre
    window.addEventListener('keydown', handleKeyPress);

    // Nettoyez le gestionnaire d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="container">
      <p>Survolez le canvas pour afficher les coordonnées des axes X et Y.</p>
      <p>Coordonnées X : {coordinates.x}</p>
      <p>Coordonnées Y : {coordinates.y}</p>
      <div className="buttons">
        <button>Right</button>
      </div>
      <div id="gameBoardContainer">
        <canvas
          id="gameBoard"
          ref={canvasRef}
          width={400} // Largeur du canvas
          height={400} // Hauteur du canvas
          onMouseMove={handleMouseMove}
        ></canvas>
        <Snake left={left} top={top} />
      </div>
      
    </div>
  );
};
export default CanvasWithCoordinates;
