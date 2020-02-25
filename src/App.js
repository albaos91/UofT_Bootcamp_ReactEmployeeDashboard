import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import AdvanceFilter from './components/AdvanceFilter';
import {
  getUsers,
  searchEmployeeByName,
  searchEmpByNameAndDepartment
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
        setFilteredUsers(
          [...filteredUsers].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA > nameB ? 1 : nameA < nameB ? -1 : 0;
          })
        );
        break;
      default:
        setFilteredUsers(users);
        break;
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
        />
        {/* <Main /> */}
        <Table filteredUsers={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
