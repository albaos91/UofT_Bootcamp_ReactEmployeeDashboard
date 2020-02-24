import React, { useState, useEffect } from 'react';

export default function TableBody() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      if (res.ok) {
        const jsonRes = await res.json();
        return jsonRes;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const assignRandomDepartment = () => {
    const departments = [
      'Engineering',
      'Sales',
      'Marketing',
      'Design',
      'Finance',
      'Accounting'
    ];

    return departments[Math.floor(Math.random() * departments.length)];
  };

  useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
    });
  }, []);

  return (
    <React.Fragment>
      <tbody>
        {users.map(user => {
          user.department = assignRandomDepartment();
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.department}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </React.Fragment>
  );
}
