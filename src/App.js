import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <div className='container mt-5'>
        <Header />
        <Search />
        <Main />
      </div>
    </div>
  );
}

export default App;
