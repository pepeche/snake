import "./Gameover.css";

function Gameover({ setIsGameOver }) {
  return (
    <div id="gameOverGlobal">
      <p>You lose !</p>
      <button onClick={() => setIsGameOver(false)}>Launch new game</button>
    </div>
  );
}

export default Gameover;
