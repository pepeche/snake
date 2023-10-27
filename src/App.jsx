import "./App.css";
import Gameboard from "./Gameboard.jsx";

function App() {
  let gridSizeGlobal = 20;
  let score = 0

  return (
    <div className="App">
      <div>
      <p>Règles du jeu</p>
      <i className="rules">Jouez grâce aux flèches gauche et droites de votre clavier </i>
      </div>
      <div className="score">Score : {score} points</div>
      <div>
        <Gameboard gridSizeGlobal={gridSizeGlobal} score={score} />
      </div>
      {/* <button>Start game</button> */}
    </div>
  );
}

export default App;
