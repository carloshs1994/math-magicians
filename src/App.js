import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function CalculatorPage() {
  return (
    <>
      <main>
        <Calculator />
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, do not you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

const App = () => (
  <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="about" element={<About />} />
    </Routes>
  </div>
);

export default App;
