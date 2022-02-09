import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  FirstObject = {
    next: null,
    operation: null,
  };

  constructor(props) {
    super(props);
    this.arrOfValues = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    this.state = { total: '0' };
  }

  PrintButtons = ({ arr }) => arr.map((value) => this.CalculatorButton(value));

  PressButton = ({ target }) => {
    const ResultObj = calculate({ total: `${target.innerText}`, ...this.FirstObject }, `${target.innerText}`);
    this.FirstObject.next = ResultObj.next;
    this.FirstObject.operation = ResultObj.operation;
    console.log(target.innerText, this.FirstObject);
    console.log(ResultObj);
  };

  CalculatorButton = (value) => {
    if (value === '0') {
      return (<button onClick={this.PressButton} className="calculator-button-0" key={value} type="button">{value}</button>);
    } if (value === '÷'
    || value === 'x'
    || value === '-'
    || value === '+'
    || value === '=') {
      return (<button onClick={this.PressButton} className="calculator-button-operation" key={value} type="button">{value}</button>);
    }
    return (<button onClick={this.PressButton} key={value} type="button">{value}</button>);
  };

  render() {
    const { total } = this.state;
    return (
      <section className="calculator">
        <div className="calculator-screen">
          <p>{total}</p>
        </div>
        <this.PrintButtons arr={this.arrOfValues} />
      </section>
    );
  }
}
