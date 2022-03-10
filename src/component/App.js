import React from 'react';
import '../App.css';
import Jeeves from './Jeeves';

function App () {
   return (
      <div className="App">
         <header className="App-header">
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
            <Jeeves />
         </header>
      </div>
   );
}

export default App;
