import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <div className='container mt-5'>
        <Header />
        <Form />
        <Main />
      </div>
    </div>
  );
}

export default App;
