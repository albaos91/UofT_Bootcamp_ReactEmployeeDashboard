import React, { useState } from 'react';

export default function Form(props) {
  const [name, setName] = useState();
  const [department, setDepartment] = useState('All');

  const handleInputChange = e => {
    setName(e.target.value);
  };

  const handleOptionChange = e => {
    setDepartment(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (props.handleSearch) {
      props.handleSearch(name, department);
    }
  };

  return (
    <form onSubmit={e => onFormSubmit(e)}>
      <div className='form-row'>
        <div className='form-group col-md-4 offset-md-1'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Type in a name ..'
            value={name}
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='department'>Department</label>
          <select
            className='form-control'
            id='department'
            value={department}
            onChange={e => handleOptionChange(e)}
          >
            <option value='All'>All</option>
            <option value='Engineering'>Engineering</option>
            <option value='Accounting'>Accounting</option>
            <option value='Sales'>Sales</option>
            <option value='Marketing'>Marketing</option>
            <option value='Finance'>Finance</option>
            <option value='Design'>Design</option>
          </select>
        </div>
        <div className='form-group col-md-2 d-flex align-items-end'>
          <button className='btn btn-primary btn-block'>
            Filter
            <span className='ml-3'>
              <i className='fas fa-search'></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
