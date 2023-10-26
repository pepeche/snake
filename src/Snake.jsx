// import React, { useState, useEffect, useCallback } from "react";
import "./Snake.css";

function Snake({left, top}) {
  return <div 
    className="snakeSprite"
    style = {{
      left : `${left}px`,
      top : `${top}px`
    }}
  ></div>;
}

export default Snake;
