import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState('');

  const handleCalculation = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(n1 + n2);
        break;
      case '-':
        setResult(n1 - n2);
        break;
      case '*':
        setResult(n1 * n2);
        break;
      case '/':
        if (n2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        setResult('Please select an operator');
    }
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div>
        <button onClick={() => setOperator('+')}>+</button>
        <button onClick={() => setOperator('-')}>-</button>
        <button onClick={() => setOperator('*')}>*</button>
        <button onClick={() => setOperator('/')}>/</button>
      </div>
      <div>
        <button onClick={handleCalculation}>Calculate</button>
      </div>
      <div>
        {result !== null && <h2>Result: {result}</h2>}
      </div>
    </div>
  );
};

export default Calculator;
