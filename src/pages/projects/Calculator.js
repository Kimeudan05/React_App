// import React, { useState } from 'react';

// const Calculator = () => {
//   const [displayValue, setDisplayValue] = useState('');
//   const [firstOperand, setFirstOperand] = useState(null);
//   const [operator, setOperator] = useState(null);
//   const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

//   const handleButtonClick = (value) => {
//     if (['+', '-', '*','%' ,'/'].includes(value)) {
//       setOperator(value);
//       setFirstOperand(parseFloat(displayValue));
//       setShouldResetDisplay(true);
//     } else if (value === 'AC') {
//       setDisplayValue('');
//       setFirstOperand(null);
//       setOperator(null);
//       setShouldResetDisplay(true);
//     } else if (value === 'DEL') {
//       setDisplayValue(displayValue.slice(0, -1));
//     } else if (value === '=') {

//       if (firstOperand !== null && operator !== null) {
//         const secondOperand = parseFloat(displayValue);
//         const result = calculate(firstOperand, operator, secondOperand);
//         setDisplayValue(firstOperand, operator,secondOperand)
//         // setDisplayValue(result.toString());
//         setFirstOperand(result);
//         setOperator(null);
//       }
//     } else {
//       if (shouldResetDisplay) {
//         setDisplayValue(value);
//         setShouldResetDisplay(false);
//       } else {
//         setDisplayValue(displayValue + value);
//       }
//     }
//   };

//   const calculate = (num1, operator, num2) => {
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '%':
//         return num1 % num2
//       case '/':
//         return num2 !== 0 ? num1 / num2 : 'Error';
//       default:
//         return num2;
//     }
//   };

//   return (
//     <div>
//       <h1>Calculator <span>fx 82</span></h1>
//       <div className="calculator">
//         <input type="text" id="display" readOnly value={displayValue} />
//         <div className="buttons">
//           <button onClick={() => handleButtonClick('AC')}>AC</button>
//           <button onClick={() => handleButtonClick('/')}>/</button>
//           <button onClick={() => handleButtonClick('*')}>*</button>
//           <button onClick={() => handleButtonClick('DEL')}>DEL</button>
//           <button onClick={() => handleButtonClick('7')}>7</button>
//           <button onClick={() => handleButtonClick('8')}>8</button>
//           <button onClick={() => handleButtonClick('9')}>9</button>
//           <button onClick={() => handleButtonClick('-')}>-</button>
//           <button onClick={() => handleButtonClick('4')}>4</button>
//           <button onClick={() => handleButtonClick('5')}>5</button>
//           <button onClick={() => handleButtonClick('6')}>6</button>
//           <button onClick={() => handleButtonClick('+')}>+</button>
//           <button onClick={() => handleButtonClick('1')}>1</button>
//           <button onClick={() => handleButtonClick('2')}>2</button>
//           <button onClick={() => handleButtonClick('3')}>3</button>
//           <button id="equal" onClick={() => handleButtonClick('=')}>=</button>
//           <button onClick={() => handleButtonClick('%')}>%</button>
//           <button onClick={() => handleButtonClick('0')}>0</button>
//           <button onClick={() => handleButtonClick('.')}>.</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;

import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleButtonClick = (value) => {
    if (['+', '-', '*','%', '/'].includes(value)) {
      if (firstOperand === null) {
        setFirstOperand(parseFloat(displayValue));
        setOperator(value);
        setDisplayValue(displayValue + value);
        setShouldResetDisplay(true);
      } else if (operator && !isResultDisplayed) {
        const secondOperand = parseFloat(displayValue);
        const result = calculate(firstOperand, operator, secondOperand);
        setDisplayValue(`${firstOperand} ${operator} ${secondOperand} =  ${result}${value}`);
        setFirstOperand(result);
        setOperator(value);
        setShouldResetDisplay(true);
      } else {
        setOperator(value);
        setDisplayValue(displayValue + value);
        setShouldResetDisplay(true);
      }
    } else if (value === 'AC') {
      setDisplayValue('');
      setFirstOperand(null);
      setOperator(null);
      setShouldResetDisplay(false);
      setIsResultDisplayed(false);
    } else if (value === 'DEL') {
      setDisplayValue(displayValue.slice(0, -1));
    } else if (value === '=') {
      if (firstOperand !== null && operator !== null) {
        const secondOperand = parseFloat(displayValue);
        const result = calculate(firstOperand, operator, secondOperand);
        
        setDisplayValue(result.toString());
        setFirstOperand(result);
        setOperator(null);
      }
    } else {
      if (shouldResetDisplay || isResultDisplayed) {
        setDisplayValue(value);
        setShouldResetDisplay(false);
        setIsResultDisplayed(false);
      } else {
        setDisplayValue(displayValue + value);
      }
    }
  };

  const calculate = (num1, operator, num2) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '%':
        return num1 % num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Error';
      default:
        return num2;
      
    }
  };

  return (
    <div>
      <h1>Calculator <span>fx 82</span></h1>
      <div className="calculator">
        <input type="text" id="display" readOnly value={displayValue} />
        <div className="buttons">
          <button onClick={() => handleButtonClick('AC')}>AC</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('DEL')}>DEL</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button id="equal" onClick={() => handleButtonClick('=')}>=</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;