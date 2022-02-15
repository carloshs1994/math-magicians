import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to our page!</h2>
        <p>
          Incididunt Lorem cupidatat nulla ea fugiat. Eiusmod voluptate officia sit
          eu voluptate anim aliquip. Dolor commodo est deserunt consequat sint elit
          Lorem cillum nisi veniam. Cillum sit deserunt enim ullamco magna irure nisi quis.
          Cupidatat exercitation ad laboris occaecat cillum dolore eu velit reprehenderit
          sint nostrud non. Dolore irure consequat est reprehenderit occaecat irure sunt anim
          consequat. Amet reprehenderit et esse anim qui culpa non nisi aliquip ullamco culpa.
          Sint officia incididunt culpa elit elit fugiat velit tempor dolor nisi ex ipsum.
          Sint adipisicing id Lorem enim ullamco qui. Non excepteur est magna magna pariatur.
          Sint do minim pariatur sint dolor ut dolore cupidatat duis aliquip cillum nulla.
          Sint exercitation tempor excepteur occaecat esse cillum elit non voluptate
          sunt fugiat irure proident. Sint id cupidatat dolor labore culpa nulla velit
          exercitation sunt in laborum Lorem eu. Mollit sint magna sunt labore labore esse
          velit laborum magna ullamco. Est magna amet nisi laborum excepteur.
          Ipsum ullamco voluptate ad commodo. Amet aute incididunt velit ipsum officia
          aliqua esse in incididunt aute est eu. Exercitation enim veniam ex consectetur dolore.
          Cillum velit cillum voluptate nulla cillum officia. Nostrud sunt eiusmod
          excepteur fugiat minim nisi incididunt laborum eiusmod nostrud nulla eiusmod.
          Culpa excepteur dolore proident velit pariatur occaecat. Tempor amet veniam nisi sint
          quis consectetur incididunt non deserunt. Pariatur aliquip quis cillum in duis
          quis consectetur. Anim aliqua dolor incididunt ad consectetur. Anim ullamco ex labore
          dolor consequat est commodo sint sit aute. Excepteur magna irure reprehenderit incididunt
          mollit eu fugiat deserunt quis sint nulla pariatur.
        </p>
        <p>
          Incididunt Lorem cupidatat nulla ea fugiat. Eiusmod voluptate officia sit
          eu voluptate anim aliquip. Dolor commodo est deserunt consequat sint elit
          Lorem cillum nisi veniam. Cillum sit deserunt enim ullamco magna irure nisi quis.
          Cupidatat exercitation ad laboris occaecat cillum dolore eu velit reprehenderit
          sint nostrud non. Dolore irure consequat est reprehenderit occaecat irure sunt anim
          consequat. Amet reprehenderit et esse anim qui culpa non nisi aliquip ullamco culpa.
          Sint officia incididunt culpa elit elit fugiat velit tempor dolor nisi ex ipsum.
          Sint adipisicing id Lorem enim ullamco qui. Non excepteur est magna magna pariatur.
          Sint do minim pariatur sint dolor ut dolore cupidatat duis aliquip cillum nulla.
          Sint exercitation tempor excepteur occaecat esse cillum elit non voluptate
          sunt fugiat irure proident. Sint id cupidatat dolor labore culpa nulla velit
          exercitation sunt in laborum Lorem eu. Mollit sint magna sunt labore labore esse
          velit laborum magna ullamco. Est magna amet nisi laborum excepteur.
          Ipsum ullamco voluptate ad commodo. Amet aute incididunt velit ipsum officia
          aliqua esse in incididunt aute est eu. Exercitation enim veniam ex consectetur dolore.
          Cillum velit cillum voluptate nulla cillum officia. Nostrud sunt eiusmod
          excepteur fugiat minim nisi incididunt laborum eiusmod nostrud nulla eiusmod.
          Culpa excepteur dolore proident velit pariatur occaecat. Tempor amet veniam nisi sint
          quis consectetur incididunt non deserunt. Pariatur aliquip quis cillum in duis
          quis consectetur. Anim aliqua dolor incididunt ad consectetur. Anim ullamco ex labore
          dolor consequat est commodo sint sit aute. Excepteur magna irure reprehenderit incididunt
          mollit eu fugiat deserunt quis sint nulla pariatur.
        </p>
      </main>
    </>
  );
}

function CalculatorPage() {
  return (
    <>
      <main>
        <section className="calculator-container">
          <h2>Let&apos;s do some math!</h2>
          <Calculator />
        </section>
      </main>
    </>
  );
}

function Quote() {
  return (
    <>
      <main>
        <h2>
          &quot;It&apos;s the inspired student that continues to learn on their own.
          That&apos;s what separates the real achievers in the world from those who pedal along,
          finishing assignments.&quot; – Neil DeGrasse Tyson
        </h2>
      </main>
    </>
  );
}

const App = () => (
  <div className="App">
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/calculator">Calculator</Link>
        <span>|</span>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
