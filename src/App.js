import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <div className='container mt-5'>
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
