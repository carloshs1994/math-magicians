import React from 'react';

// export default class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <section className="calculator">
//         <h1>
//           Hello
//           {this.props.name}
//           !
//         </h1>
//       </section>
//     );
//   }
// }

const Calculator = () => (
  <section className="calculator">
    <div className="calculator-screen">
      <p>0</p>
    </div>
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button className="calculator-button-operation" type="button">+</button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button className="calculator-button-operation" type="button">x</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button className="calculator-button-operation" type="button">-</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button className="calculator-button-operation" type="button">+</button>
    <button className="calculator-button-0" type="button">0</button>
    <button type="button">.</button>
    <button className="calculator-button-operation" type="button">=</button>
  </section>
);

export default Calculator;
