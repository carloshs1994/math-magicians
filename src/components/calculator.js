import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculate, isNumber } from '../logic/calculate';

let DataObject = {
  total: '0',
  next: null,
  operation: null,
};

const Calculator = () => {
  const [screen, setState] = useState(0);
  const arrOfValues = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const PressButton = ({ target }) => {
    DataObject = calculate(DataObject, `${target.innerText}`);
    if (isNumber(target.innerText)
    || target.innerText === '.'
    || target.innerText === '+/-') {
      setState(() => {
        const preScreen = DataObject.next;
        return preScreen;
      });
    } else if (target.innerText === 'AC') {
      setState(() => {
        const preScreen = '0';
        return preScreen;
      });
    } else {
      setState(() => {
        const preScreen = DataObject.total;
        return preScreen;
      });
    }
  };

  const CalculatorButton = (value) => {
    if (value === '0') {
      return (
        <button onClick={PressButton} className="calculator-button-0" key={value} type="button">{value}</button>
      );
    } if (value === '÷'
    || value === 'x'
    || value === '-'
    || value === '+'
    || value === '=') {
      return (
        <button onClick={PressButton} className="calculator-button-operation" key={value} type="button">{value}</button>
      );
    }
    return (<button onClick={PressButton} key={value} type="button">{value}</button>);
  };

  const PrintButtons = ({ arr }) => arr.map((value) => CalculatorButton(value));
  PrintButtons.propTypes = {
    arr: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return (
    <section className="calculator">
      <div className="calculator-screen">
        <p>{screen}</p>
      </div>
      <PrintButtons arr={arrOfValues} />
    </section>
  );
};

export default Calculator;
