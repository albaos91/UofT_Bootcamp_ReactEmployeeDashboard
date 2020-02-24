import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main';
import AdvanceFilter from './components/AdvanceFilter';

function App() {
  return (
    <div className='App'>
      <div className='container mt-5'>
        <Header />
        <Search />
        <AdvanceFilter />
        <Main />
      </div>
    </div>
  );
}

export default App;
