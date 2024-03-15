import { useState } from "react";

function ButtonText() {
  const [text, setText] = useState("hello World");

  const clickButton = () => setText("click Button");

  return <button onClick={clickButton}>{text}</button>;
}

export default ButtonText;
