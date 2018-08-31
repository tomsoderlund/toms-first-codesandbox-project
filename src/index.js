import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <div className="App">
      <h1>ToggleButton in React</h1>
      <p>Now on GitHub, too.</p>
      <ToggleButton>Hello</ToggleButton>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
