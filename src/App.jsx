import "./App.css";
import Gameboard from "./Gameboard.jsx";

function App() {
  let gridSizeGlobal = 20;

  return (
    <div className="App">
      <div className="score">Score : 30</div>
      <div>
        <Gameboard gridSizeGlobal={gridSizeGlobal} />
      </div>
      {/* <button>Start game</button> */}
    </div>
  );
}

export default App;
