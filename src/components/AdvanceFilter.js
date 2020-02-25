import React, { useState } from 'react';

export default function AdvanceFilter(props) {
  const [query, setQuery] = useState();
  const [sortType, setSortType] = useState();
  const [filterLabel, setFilterLabel] = useState();
  const [filterType, setFilterType] = useState();

  const onInputChange = e => {
    setSortType('Please Select');
    setQuery(e.target.value);
    if (props.handleInputChange) {
      props.handleInputChange(e.target.value);
    }
  };

  const onSortSelect = e => {
    setSortType(e.target.value);

    if (props.handleSortSelect) {
      props.handleSortSelect(e.target.value);
    }
  };

  const onFilterSelect = e => {
    setFilterType(e.target.value);
    setFilterLabel(e.target.options[e.target.selectedIndex].parentNode.label);
    if (props.handleFilterSelect) {
      props.handleFilterSelect(
        e.target.options[e.target.selectedIndex].parentNode.label,
        e.target.value
      );
    }
  };

  return (
    <div className='advance-filter mt-5'>
      <h5 className='my-5 text-center'>Advance Filter</h5>
      <form>
        <div className='form-row'>
          <div className='offset-1 col-4 mr-2'>
            <input
              type='text'
              className='form-control'
              placeholder='Type in a name ..'
              value={query}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className='form-row'>
            <label htmlFor='sortBy' className='col-form-label'>
              Sort by:
            </label>
            <div className='col mr-2'>
              <select
                className='form-control'
                id='sortBy'
                value={sortType}
                onChange={e => onSortSelect(e)}
              >
                <option>Please Select</option>
                <option value='Alphabetical'>Alphabetical A-Z</option>
                <option value='Department'>Department A-Z</option>
              </select>
            </div>
          </div>
          <div className='form-row'>
            <label htmlFor='filterBy' className='col-form-label'>
              Filter by:
            </label>
            <div className='col'>
              <select
                className='form-control'
                id='filterBy'
                value={filterType}
                onChange={e => onFilterSelect(e)}
              >
                <option>Please Select</option>
                <optgroup label='Department'>
                  <option value='Accounting'>Accounting</option>
                  <option value='Design'>Design</option>
                  <option value='Engineering'>Engineering</option>
                  <option value='Marketing'>Marketing</option>
                  <option value='Sales'>Sales</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className='col-1 ml-3'>
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
