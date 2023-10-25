import './App.css';
// import Snake from "./Snake.js";
import Block from "./Block.js";



function App() {
  return (
    <div className="App">
      <div id="game-zone">
          <Block/>
      </div>
      <button>Start game</button>
    </div>
  );
}

export default App;
