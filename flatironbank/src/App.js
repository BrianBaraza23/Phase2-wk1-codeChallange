import React from 'react';
import './App.css';
import FormComponent from './Components/Form';
import BalanceComponent from './Components/BalanceTable';
import Total from './Total'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <div className="Menubar">
              <h1>Welcome to Flatiron Bank</h1>
              <h2>Brian Baraza</h2>
              <h6>Your current balance is:</h6>
              { <h3><Total /></h3>  }
            
            </div>
        
        <p>
          New transaction button & form
        </p>

        <p>
          <FormComponent />
        </p>

        <p>
          <BalanceComponent />
        </p>





        
      </header>
    </div>
  );
}

export default App;
