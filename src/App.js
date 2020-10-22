import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ScrollingList } from './ScrollingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollingList>
        </ScrollingList>
      </header>
    </div>
  );
}

export default App;
