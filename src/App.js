import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import AdvanceFilter from './components/AdvanceFilter';
import {
  getUsers,
  searchEmployeeByName,
  searchEmpByNameAndDepartment,
  sortBySelection,
  filterBySelection
} from './utils';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('I run');
    getUsers().then(users => {
      setUsers(users);
      setFilteredUsers(users);
    });
  }, []);

  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    console.log('I run');
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = (name, department) => {
    let searchResults = null;

    if (department === 'All') {
      searchResults = searchEmployeeByName(filteredUsers, name);
    } else {
      searchResults = searchEmpByNameAndDepartment(users, name, department);
    }
    setFilteredUsers(searchResults);
  };

  const handleInputChange = name => {
    setFilteredUsers(searchEmployeeByName(users, name));
  };

  const handleFormClear = () => {
    setFilteredUsers(users);
  };

  const handleSortSelect = sortType => {
    switch (sortType) {
      case 'Alphabetical':
        setFilteredUsers(sortBySelection(filteredUsers, 'name'));
        break;
      case 'Department':
        setFilteredUsers(sortBySelection(filteredUsers, 'department'));
        break;
      default:
        setFilteredUsers(users);
        break;
    }
  };

  const handleFilterSelect = (filterLabel, filterType) => {
    console.log(filterLabel);
    console.log(filterType);
    if (filterType === 'Please Select') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(filterBySelection(users, filterLabel, filterType));
    }
  };

  return (
    <div className='App'>
      <div className='container mt-5'>
        <Header />
        <Search handleSearch={handleSearch} handleFormClear={handleFormClear} />
        <AdvanceFilter
          handleInputChange={handleInputChange}
          handleSortSelect={handleSortSelect}
          handleFilterSelect={handleFilterSelect}
        />
        {/* <Main /> */}
        <Table filteredUsers={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
