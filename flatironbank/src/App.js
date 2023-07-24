import React from 'react';
import './App.css';
import Transaction from './Components/Transaction';




function App() {
  return (
    <div className="App">
      <header className="App-header">
            <div className="Menubar">
              <h1>Welcome to Flatiron Bank</h1>
              <h2>Brian Baraza</h2>
            
            
            </div>
        
        <>
        <p>Enter your new transaction in the form below</p>
        <Transaction />

        </>
   
      </header>
    </div>
  );
}

export default App;
