import React from 'react';

export default function Form() {
  return (
    <form>
      <div className='form-row'>
        <div className='form-group col-md-4 offset-md-1'>
          <label htmlFor='name'>Name</label>
          <input type='text' className='form-control' id='name' />
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='department'>Department</label>
          <select className='form-control' id='department'>
            <option>Engineering</option>
            <option>Accounting</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Design</option>
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
