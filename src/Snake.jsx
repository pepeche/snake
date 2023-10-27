import { useEffect, useRef, useState } from "react";
import "./Snake.css";

function Snake({width, height}) {
  
  const canvasRef = useRef(null);
  
  let [xPos, setxPos] = useState(60);
  let [yPos, setyPos] = useState(60);
  let [direction, setDirection] = useState("right");
  
  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if(xPos + 20 > width || xPos < 0 || yPos + 20 > height || yPos < 0){
      alert(xPos)
      setDirection("right")
      setxPos(60);
      setyPos(60);
      ctx.fillRect(xPos,yPos,20,20);
      ctx.fillStyle = "green";
    } else {
      ctx.fillRect(xPos,yPos,20,20);
      ctx.fillStyle = "green";
    }

    const interval = setInterval(() => {
      if(direction === "right"){
        console.log(direction, xPos, yPos)
        setxPos((prevxPos) => prevxPos + 20)
        ctx.clearRect(xPos, yPos, width, height)
      }
      else if (direction === "bottom"){
        console.log(direction, xPos, yPos)
        setyPos((prevyPos) => prevyPos + 20);
        ctx.clearRect(xPos, yPos, width, height)
      }
      else if (direction === "left") {
        console.log(direction, xPos, yPos)
        setxPos((prevxPos) => prevxPos - 20)
        ctx.clearRect(xPos, yPos, width, height)
      } 
      else{
        console.log(direction, xPos, yPos)
        setyPos((prevyPos) => prevyPos - 20);
        ctx.clearRect(xPos, yPos, width, height)
      }
    }, 500);
    window.addEventListener('keydown', moveSnake);
    return () => {
      window.removeEventListener('keydown', moveSnake);
      clearInterval(interval)
    };
  }, [xPos, yPos, direction])

  function moveSnake(event) {
    console.log(direction)
    if (event.key === 'ArrowRight') {
      direction === "right" ?  setDirection("bottom") : 
      direction === "bottom" ?  setDirection("left") : 
      direction === "left" ?  setDirection("top") : setDirection("right");
      console.log("arrowright", direction)
    } 
    else if (event.key === 'ArrowLeft') {
      direction === "right" ?  setDirection("top") : 
      direction === "top" ?  setDirection("left") : 
      direction === "left" ?  setDirection("bottom") : setDirection("right");
      console.log("arrowleft", direction)
    }
  }

  return (
    <canvas
      className="snakeSprite"
      ref={canvasRef}
      width={width}
      height={height}
    >
    </canvas>
      );
}

export default Snake;
