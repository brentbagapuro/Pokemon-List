import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pokedex />
    </div>
  );
}

export default App;
