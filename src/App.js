import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleResult = () => {
    try {
      setInput(calculateResult(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };


  const calculateResult = (expression) => {
    let result = 0;
    let currentNumber = '';
    let operator = '+';
    const numbers = [];


    expression.split('').forEach((char) => {
      if (/\d/.test(char)) {
        currentNumber += char;
      } else if (['+', '-', '*', '/', '%'].includes(char)) {
        if (currentNumber) {
          numbers.push({ operator, number: parseFloat(currentNumber) });
          currentNumber = '';
        }
        operator = char;
      }
    });


    if (currentNumber) {
      numbers.push({ operator, number: parseFloat(currentNumber) });
    }


    numbers.forEach(({ operator, number }, index) => {
      if (operator === '+') result += number;
      else if (operator === '-') result -= number;
      else if (operator === '*') result *= number;
      else if (operator === '/') result /= number;
      else if (operator === '%') result = result % number;
    });

    return result;
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <span>{input}</span>
      </div>
      <div className="button-container">
        <button className="button orange" onClick={handleClear}>AC</button>
        <button className="button" onClick={() => handleClick('/')}>/</button>
        <button className="button" onClick={() => handleClick('*')}>*</button>
        <button className="button" onClick={() => handleClick('-')}>-</button>

        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button" onClick={() => handleClick('+')}>+</button>

        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button" onClick={() => handleClick('%')}>%</button>

        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button" onClick={() => handleClick('0')}>0</button>

        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button equal" onClick={handleResult}>=</button>
      </div>
      <div className="footer">Calc by Ashish</div>
    </div>
  );
}

export default App;
