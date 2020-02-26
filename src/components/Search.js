import React, { useState } from 'react';

export default function Form(props) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('All');
  const [searching, setSearching] = useState(false);

  const handleInputChange = e => {
    setName(e.target.value);
  };

  const handleOptionChange = e => {
    setDepartment(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setSearching(true);
    if (props.handleSearch) {
      props.handleSearch(name, department);
    }
  };

  const onFormClear = () => {
    setSearching(false);
    setName('');
    setDepartment('All');
    if (props.handleFormClear) {
      props.handleFormClear();
    }
  };

  return (
    <form onSubmit={e => onFormSubmit(e)}>
      <div className='form-row'>
        <div
          className={
            !searching
              ? 'form-group col-md-4 offset-md-1'
              : 'form-group col-md-4'
          }
        >
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Type in a name ..'
            value={name}
            onChange={e => handleInputChange(e)}
            required
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
        {!searching ? (
          <div className='form-group col-md-2 d-flex align-items-end'>
            <button className='btn btn-primary btn-block'>
              Search
              <span className='ml-3'>
                <i className='fas fa-search'></i>
              </span>
            </button>
          </div>
        ) : (
          <div className='form-group col-md-4 d-flex align-items-end'>
            <button className='btn btn-primary btn-block'>
              Search
              <span className='ml-3'>
                <i className='fas fa-search'></i>
              </span>
            </button>
            {searching && (
              <button
                className='btn btn-secondary btn-block ml-2'
                type='button'
                onClick={onFormClear}
              >
                Clear
                <span className='ml-3'>
                  <i className='fas fa-times'></i>
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
