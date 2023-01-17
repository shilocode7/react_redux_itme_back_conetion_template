import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Samp } from './features/samp/Samp';
import AddStudent from './features/samp/AddStudent';

function App() {
  return (
    <div style={{backgroundColor: '#faead6'}} className="App">
      <header className="App-header">
        <AddStudent></AddStudent>
        <hr></hr>
        <Samp></Samp>
      </header>
    </div>
  );
}

export default App;
