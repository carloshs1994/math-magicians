import React from 'react';
import { calculate, isNumber } from '../logic/calculate';

export default class Calculator extends React.Component {
  DataObject = {
    total: '0',
    next: null,
    operation: null,
  };

  constructor(props) {
    super(props);
    this.arrOfValues = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    this.state = {
      screen: '0',
    };
  }

  PrintButtons = ({ arr }) => arr.map((value) => this.CalculatorButton(value));

  PressButton = ({ target }) => {
    this.DataObject = calculate(this.DataObject, `${target.innerText}`);
    if (isNumber(target.innerText)
    || target.innerText === '.'
    || target.innerText === '+/-') {
      this.setState({ screen: this.DataObject.next });
    } else if (target.innerText === 'AC') {
      this.setState({ screen: '0' });
    } else {
      this.setState({ screen: this.DataObject.total });
    }
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
    const { screen } = this.state;
    return (
      <section className="calculator">
        <div className="calculator-screen">
          <p>{screen}</p>
        </div>
        <this.PrintButtons arr={this.arrOfValues} />
      </section>
    );
  }
}
