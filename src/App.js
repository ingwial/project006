import { useState } from "react";
import "./App.css";
import Dice from "./Dice";

function App() {
  const [values, setValues] = useState([0, 0, 0]);
  console.log(values);

  function generateValue() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  function throwTheDice() {
    const value1 = generateValue();
    const value2 = generateValue();
    const value3 = generateValue();

    setValues([value1, value2, value3]);
    console.log(values);
  }

  return (
    <div>
      <Dice value={values[0]} />
      <Dice value={values[1]} />
      <Dice value={values[2]} />
      <button type="submit" onClick={throwTheDice}>
        Throw The Dice
      </button>
    </div>
  );
}

export default App;
