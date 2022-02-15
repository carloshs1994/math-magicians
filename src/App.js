import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CalculatorPage from './components/CalculatorPage';
import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
