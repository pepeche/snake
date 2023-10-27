import { useEffect, useRef } from "react";
import "./Pomme.css"

function Pomme({width, height, grid}) {

    const apple = useRef(null);
    const gridSize = grid/2
    
    useEffect(()=>{
        createApple()
    })

    function spawnApple(){
        
    }
    
    function createApple(){
        const canvas = apple.current;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(gridSize*3, gridSize*5, gridSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke()
        ctx.strokeStyle = "red"
        ctx.fillStyle = 'red'
    }

    return (
        <canvas
        className="appleSprite"
        ref={apple}
        width={width}
        height={height}
        >
        </canvas>
    );
  }
  
export default Pomme;