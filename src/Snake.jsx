import { useEffect, useRef, useState } from "react";
import "./Snake.css";

function Snake({width, height}) {
  
  const snakeHead = useRef(null);
  
  let [HeadxPos, setHeadxPos] = useState(60);
  let [HeadyPos, setHeadyPos] = useState(60);
  let [BodyxPos, setBodyxPos] = useState(HeadxPos-20);
  let [BodyyPos, setBodyyPos] = useState(60);
  let [TailxPos, setTailxPos] = useState(BodyxPos-20);
  let [TailyPos, setTailyPos] = useState(60);
  let [direction, setDirection] = useState("right");
  let array = [];
  
  useEffect(()=>{
    const canvas = snakeHead.current;
    const ctx = canvas.getContext("2d");

    if(HeadxPos + 20 > width || HeadxPos < 0 || HeadyPos + 20 > height || HeadyPos < 0){
      endGame(ctx, HeadxPos, HeadyPos)
    } else {
      continueGame(ctx, HeadxPos, HeadyPos, BodyxPos, BodyyPos, TailxPos, TailyPos)
    }

    const interval = setInterval(() => {
      if(direction === "right"){
        setHeadxPos((prevxPos) => prevxPos + 20)
        setBodyyPos(array[0][1])
        setBodyxPos(array[0][0])
        setTailyPos(array[1][1])
        setTailxPos(array[1][0])
        ctx.clearRect(HeadxPos, HeadyPos, width, height)
        ctx.clearRect(BodyxPos, BodyyPos, width, height)
        ctx.clearRect(TailxPos, TailyPos, width, height)

      }
      else if (direction === "bottom"){
        setHeadyPos((prevyPos) => prevyPos + 20);
        setBodyyPos(array[0][1])
        setBodyxPos(array[0][0])
        setTailyPos(array[1][1])
        setTailxPos(array[1][0])
        ctx.clearRect(HeadxPos, HeadyPos, width, height)
        ctx.clearRect(BodyxPos, BodyyPos, width, height)
        ctx.clearRect(TailxPos, TailyPos, width, height)
      }
      else if (direction === "left") {
        setHeadxPos((prevxPos) => prevxPos - 20)
        setBodyyPos(array[0][1])
        setBodyxPos(array[0][0])
        setTailyPos(array[1][1])
        setTailxPos(array[1][0])
        ctx.clearRect(HeadxPos, HeadyPos, width, height)
        ctx.clearRect(BodyxPos, BodyyPos, width, height)
        ctx.clearRect(TailxPos, TailyPos, width, height)
      } 
      else{
        setHeadyPos((prevyPos) => prevyPos - 20);
        setBodyyPos(array[0][1])
        setBodyxPos(array[0][0])
        setTailyPos(array[1][1])
        setTailxPos(array[1][0])
        ctx.clearRect(HeadxPos, HeadyPos, width, height)
        ctx.clearRect(BodyxPos, BodyyPos, width, height)
        ctx.clearRect(TailxPos, TailyPos, width, height)

      }
    }, 100);
    window.addEventListener('keydown', moveSnake);
    return () => {
      window.removeEventListener('keydown', moveSnake);
      clearInterval(interval)
    };
  }, [HeadxPos, HeadyPos, direction])

  function moveSnake(event) {
    if (event.key === 'ArrowRight') {
      direction === "right" ?  setDirection("bottom") : 
      direction === "bottom" ?  setDirection("left") : 
      direction === "left" ?  setDirection("top") : setDirection("right");
    } 
    else if (event.key === 'ArrowLeft') {
      direction === "right" ?  setDirection("top") : 
      direction === "top" ?  setDirection("left") : 
      direction === "left" ?  setDirection("bottom") : setDirection("right");
    }
  }

  function continueGame(ctx, HeadxPos, HeadyPos, BodyxPos, BodyyPos, TailxPos, TailyPos){
    array.push([HeadxPos, HeadyPos], [BodyxPos, BodyyPos], [TailxPos, TailyPos]);
    ctx.fillRect(HeadxPos, HeadyPos, 20, 20);
    ctx.fillRect(BodyxPos, BodyyPos, 20, 20);
    ctx.fillRect(TailxPos, TailyPos, 20, 20);
    ctx.fillStyle = "lightgreen";
  }

  function endGame(ctx, HeadxPos, HeadyPos){
    alert("Fin du game")
      setDirection("right")
      setHeadxPos(60);
      setHeadyPos(60);
      ctx.fillRect(HeadxPos, HeadyPos, 20, 20);
      ctx.fillStyle = "green";
  }

  return (
      <canvas
        className="snakeSprite"
        ref={snakeHead}
        width={width}
        height={height}>
      </canvas>
      );
}

export default Snake;
