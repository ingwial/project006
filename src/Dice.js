import React from "react";
import "./Dice.css";

function Dice(props) {
  return <div className="square-dice">{props.value}</div>;
}

export default Dice;
