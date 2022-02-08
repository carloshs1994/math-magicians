import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.arrOfValues = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  PrintButtons = ({ arr }) => arr.map((value) => this.CalculatorButton(value));

  CalculatorButton = (value) => {
    if (value === '0') {
      return (<button className="calculator-button-0" key={value} type="button">{value}</button>);
    } if (value === '÷'
    || value === 'x'
    || value === '-'
    || value === '+'
    || value === '=') {
      return (<button className="calculator-button-operation" key={value} type="button">{value}</button>);
    }
    return (<button key={value} type="button">{value}</button>);
  };

  render() {
    return (
      <section className="calculator">
        <div className="calculator-screen">
          <p>0</p>
        </div>
        <this.PrintButtons arr={this.arrOfValues} />
      </section>
    );
  }
}
