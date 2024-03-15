import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ButtonText from "./feature/ButtonText";

function App() {
  const [index, setIndex] = React.useState(0);
  const [postion, setPosition] = React.useState({ x: 0, y: 0 });
  const handleClick = () => {
    setIndex(index + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>Click me{index}</button>
      </header>
      <div
        onPointerMove={(e) => {
          postion.x = e.clientX;
          postion.y = e.clientY;
          setPosition({ ...postion });
        }}
        style={{
          position: "absolute",
          top: postion.y,
          left: postion.x,
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
      >
        <ButtonText />
      </div>
    </div>
  );
}

export default App;
