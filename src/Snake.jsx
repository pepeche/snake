// import React, { useState, useEffect, useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import "./Snake.css";

function Snake({width, height}) {
  
  const canvasRef = useRef(null);
  
  let [xPos, setxPos] = useState(0);
  let [yPos, setyPos] = useState(0);
  let [direction, setDirection] = useState("right");
  
  
  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if(xPos + 20 > width || xPos < 0){
      alert(xPos)
      setxPos(0);
      setyPos(0)
      ctx.fillRect(xPos,yPos,20,20);
      ctx.fillStyle = "green";
    } else {
      ctx.fillRect(xPos,yPos,20,20);
      ctx.fillStyle = "green";
      // console.log(xPos, yPos)
    }
    setTimeout(() => {
      if(direction = "right"){
        setxPos((prevxPos) => prevxPos + 20)
        ctx.clearRect(xPos, yPos, width, height)
      }
      else if (direction = "bottom"){
        setyPos((prevyPos) => prevyPos + 20);
        ctx.clearRect(xPos, yPos, width, height)
      }
      else if (direction = "left") {
        setxPos((prevxPos) => prevxPos - 20)
        ctx.clearRect(xPos, yPos, width, height)
      } 
      else{
        setyPos((prevyPos) => prevyPos - 20);
        ctx.clearRect(xPos, yPos, width, height)
      }
    }, 1000);
  }, [xPos, yPos, direction])

  function moveSnake(event) {
    if (event.key === 'ArrowRight') {
      direction = "right" ?  setDirection("bottom") : 
      direction = "bottom" ?  setDirection("left") : 
      direction = "left" ?  setDirection("top") : setDirection("right");
      console.log(direction)
    } 
    else if (event.key === 'ArrowLeft') {
      direction = "right" ?  setDirection("bottom") : 
      direction = "bottom" ?  setDirection("left") : 
      direction = "left" ?  setDirection("top") : setDirection("right");
      console.log(direction)
    }
  }

  useEffect(() => {
    // Ajoutez le gestionnaire d'événements à la fenêtre
    window.addEventListener('keydown', moveSnake);

    // Nettoyez le gestionnaire d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('keydown', moveSnake);
    };
  }, []);

  return (
    <canvas
      className="snakeSprite"
      ref={canvasRef}
      width={width} // Largeur du canvas
      height={height} // Hauteur du canvas
    >
    </canvas>
      );
}

export default Snake;
