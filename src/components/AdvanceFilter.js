import React from 'react';

export default function AdvanceFilter() {
  return (
    <div className='advance-filter ml-4 mt-5'>
      <h5 className='my-5 text-center'>Advance Filter</h5>
      <form>
        <div className='form-row'>
          <div className='offset-1 col-5 mr-5'>
            <input
              type='text'
              className='form-control'
              placeholder='Type in a name ..'
            />
          </div>
          <div className='form-row'>
            <label htmlFor='sortBy' className='col-form-label'>
              Sort by:
            </label>
            <div className='col'>
              <select className='form-control' id='sortBy'>
                <option>Alphabetical A-Z</option>
              </select>
            </div>
          </div>
          <div className='col-1 ml-4'>
            <span className='mr-2' style={{ fontSize: 27 }}>
              <i className='fas fa-bars'></i>
            </span>
            <span>
              <i className='fas fa-th-large' style={{ fontSize: 27 }}></i>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
