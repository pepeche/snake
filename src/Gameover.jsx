import "./Gameover.css";

function Gameover({setIsGameOver, score}) {

  return (

    <div id="gameOverGlobal">
      <p>Fin de partie !</p>
      <p>Score final : {score}</p>
      <button  onClick={() => setIsGameOver(false)}>Nouvelle partie</button>
    </div>

  );
}

export default Gameover;