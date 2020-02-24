import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <div className='container mt-5'>
        <div className='row mb-5'>
          <div className='col-md-6 d-flex align-items-center'>
            <img src='/logo.png' alt='Logo' style={{ width: '100px' }} />
            <span className='h3'>Employee Directory</span>
          </div>
          <div className='col-md-2 offset-md-4'>
            <button className='btn btn-outline-primary btn-block'>
              Add Employee
              <span className='ml-2'>
                <i className='fas fa-plus'></i>
              </span>
            </button>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
