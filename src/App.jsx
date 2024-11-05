import React, { useState } from 'react';
import "./App.css";

function App() {
  const [input, setInput] = useState(""); //holds the current input string
  const [result, setResult] = useState(""); //holds result of calculation

  const buttonClick = (value) => { 
    if (value === "AC") {
      setInput(""); //clear input
      setResult(""); //clear result
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));//remove last char from input
    } else if (value === "=") {
      try {
        setResult(eval(input)); // Caution: eval can be dangerous; use carefully in production code
        setInput(""); //clear input
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calc-container">
      <div className="output">
        <div className="previous-operand">{result}</div> 
        <div className="current-operand">{input || "0"}</div> 
      </div>
      <div className="calc-grid">
        <button onClick={() => buttonClick('AC')} className="span-two">AC</button>
        <button onClick={() => buttonClick('DEL')}>DEL</button>
        <button onClick={() => buttonClick('/')}>/</button>
        <button onClick={() => buttonClick('1')}>1</button>
        <button onClick={() => buttonClick('2')}>2</button>
        <button onClick={() => buttonClick('3')}>3</button>
        <button onClick={() => buttonClick('*')}>*</button>
        <button onClick={() => buttonClick('4')}>4</button>
        <button onClick={() => buttonClick('5')}>5</button>
        <button onClick={() => buttonClick('6')}>6</button>
        <button onClick={() => buttonClick('+')}>+</button>
        <button onClick={() => buttonClick('7')}>7</button>
        <button onClick={() => buttonClick('8')}>8</button>
        <button onClick={() => buttonClick('9')}>9</button>
        <button onClick={() => buttonClick('-')}>-</button>
        <button onClick={() => buttonClick('=')} className="span-two">=</button>
        <button onClick={() => buttonClick('0')}>0</button>
        <button onClick={() => buttonClick('.')}>.</button>
      </div>
    </div>
  );
}

export default App;
